'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
// We'll use a dynamic import for Markdown to avoid SSR issues
import dynamic from 'next/dynamic';

// Dynamically import react-markdown with no SSR
const Markdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  role: 'user' | 'assistant';
};

// TextDelta type commented out as it's currently unused
// type TextDelta = {
//   value: string;
// };

export default function ChatWidget() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      content: t('chatwidget.welcome'), 
      isUser: false, 
      timestamp: new Date(), 
      role: 'assistant' 
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [threadId, setThreadId] = useState<string>('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Set isLoaded to true after a short delay to trigger the entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Update welcome message when language changes
  useEffect(() => {
    setMessages([
      { 
        id: '1', 
        content: t('chatwidget.welcome'), 
        isUser: false, 
        timestamp: new Date(), 
        role: 'assistant' 
      },
    ]);
  }, [language, t]);

  // Create a thread when the widget is opened
  useEffect(() => {
    if (isOpen && !threadId) {
      createThread();
    }
  }, [isOpen, threadId]);

  // Create a new thread
  const createThread = async () => {
    try {
      // Use the messages route with 'new' as the threadId to create a new thread
      const res = await fetch('/api/assistants/threads/new/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: 'create-thread' })
      });
      
      if (!res.ok) {
        throw new Error(`Failed to create thread: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json() as { threadId: string };
      setThreadId(data.threadId);
      //console.log(`Created thread with ID: ${data.threadId}`);
    } catch (error) {
      console.error('Error creating thread:', error);
    }
  };

  const handleSubmit = async () => {
    if (!inputValue.trim() || !threadId) return;

    // Add user message
    const userMessage: Message = { 
      id: `user_${Date.now().toString()}_${Math.random().toString(36).substring(2, 9)}`, 
      content: inputValue, 
      isUser: true, 
      timestamp: new Date(),
      role: 'user'
    };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setInputDisabled(true);
    setIsTyping(true);

    try {
      await sendMessageToThread(inputValue);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      setInputDisabled(false);
    }
  };

  const sendMessageToThread = async (content: string) => {
    try {
      // Only show the typing indicator, don't add an empty message yet
      // We'll add the actual message once we have content
      
      const response = await fetch(
        `/api/assistants/threads/${threadId}/messages`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            messages: [
              { role: 'user', content: content }
            ] 
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      //console.log('Response received, status:', response.status);
      
      // The API now returns a JSON response instead of a stream
      const data = await response.json();
      
      if (data && typeof data.text === 'string') {
        // Add the assistant message with the complete response text
        const assistantMessage: Message = { 
          id: `assistant_${Date.now().toString()}_${Math.random().toString(36).substring(2, 9)}`, 
          content: data.text, 
          isUser: false, 
          timestamp: new Date(),
          role: 'assistant'
        };
        setMessages(prevMessages => [...prevMessages, assistantMessage]);
        
        // Complete the interaction
        handleRunCompleted();
      } else {
        console.error('Invalid response format:', data);
        setIsTyping(false);
        setInputDisabled(false);
      }  
    } catch (error) {
      console.error('Error in sendMessageToThread:', error);
      throw error;
    }
  };


  // This function is no longer needed as we're adding the complete message at once
  // Keeping it as a stub in case we need to reimplement it later
  // const updateLastMessageContent = (fullText: string) => {
  //   // Implementation removed as we now add the complete message at once
  //   //console.log('updateLastMessageContent is deprecated');
  // };

  // Append text to the last message
  // const appendToLastMessage = (text: string) => {
  //   //console.log('Appending to last message:', text.substring(0, 50) + (text.length > 50 ? '...' : ''));
  //   setMessages((prevMessages) => {
  //     const newMessages = [...prevMessages];
  //     if (newMessages.length > 0) {
  //       const lastMessage = newMessages[newMessages.length - 1];
  //       // Ensure we're not adding raw format markers or duplicate content
  //       lastMessage.content += text;
  //     }
  //     return newMessages;
  //   });
  // };

  // When the run completes, re-enable the input
  const handleRunCompleted = () => {
    //console.log('Run completed, re-enabling input');
    setIsTyping(false);
    setInputDisabled(false);
  };





  const handleSendMessage = () => {
    if (!inputValue.trim() || !threadId || inputDisabled) return;
    handleSubmit();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 sm:right-6 md:right-8 z-50 w-auto max-w-[95vw]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl shadow-xl overflow-hidden float-right mx-0"
          >
            {/* Header */}
            <div className="bg-slate-800/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ZB</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">{t('chat.assistant')}</h3>
                  <p className="text-slate-400 text-xs">{t('chat.online')}</p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="text-slate-400 hover:text-white p-2 -mr-2"
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Chat area */}
            <div className="h-[350px] sm:h-[420px] md:h-[450px] lg:h-[500px] overflow-y-auto p-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
              {/* Date display */}
              <div className="flex justify-center mb-4">
                <div className="bg-slate-700/50 px-3 py-1 rounded-full text-xs text-slate-300">
                  {new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'pt-PT', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-white text-xs font-bold">ZB</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 text-white rounded-tl-none'
                    }`}
                  >
                    <div className="mb-1">
                      {message.isUser ? (
                        message.content
                      ) : (
                        <div className="markdown-content">
                          <Markdown>
                            {message.content}
                          </Markdown>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString(language === 'en' ? 'en-US' : 'pt-PT', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                      })}
                    </div>
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                      <span className="text-white text-xs">U</span>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">ZB</span>
                  </div>
                  <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 p-3 rounded-lg rounded-tl-none inline-block max-w-[85%]">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0 }}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0.4 }}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-slate-700/50 bg-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={t('chat.placeholder')}
                  className="flex-1 bg-slate-700/50 border border-slate-600 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || inputDisabled}
                  className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button (visible when chat is closed) */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
}
