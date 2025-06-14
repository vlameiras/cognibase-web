'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GlowingPulse } from './animations';
import { useLanguage } from '../context/LanguageContext';

const MessageBubble = ({ message, isUser }: { message: string, isUser: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`max-w-[80%] p-4 rounded-2xl mb-3 ${
        isUser 
          ? 'ml-auto bg-blue-600 text-white rounded-tr-none' 
          : 'mr-auto bg-slate-700 text-white rounded-tl-none'
      }`}
    >
      {message}
    </motion.div>
  );
};

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 p-2 rounded-full bg-slate-700 w-16">
      <motion.div
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-2 h-2 bg-slate-300 rounded-full"
      />
      <motion.div
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        className="w-2 h-2 bg-slate-300 rounded-full"
      />
      <motion.div
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        className="w-2 h-2 bg-slate-300 rounded-full"
      />
    </div>
  );
};

export default function KnowledgeBaseChat({ isPublic = true }: { isPublic?: boolean }) {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Sample knowledge base sources
  const sources = isPublic 
    ? [t('kb.sources.public1'), t('kb.sources.public2'), t('kb.sources.public3'), t('kb.sources.public4')] 
    : [t('kb.sources.internal1'), t('kb.sources.internal2'), t('kb.sources.internal3'), t('kb.sources.internal4'), t('kb.sources.internal5')];
  
  const handleSend = () => {
    if (!query.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: query, isUser: true }]);
    setQuery('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response = '';
      const queryLower = query.toLowerCase();
      
      if (language === 'en') {
        if (queryLower.includes('pricing')) {
          response = t('kb.responses.pricing');
        } else if (queryLower.includes('security') || queryLower.includes('privacy')) {
          response = t('kb.responses.security');
        } else if (queryLower.includes('integration')) {
          response = t('kb.responses.integration');
        } else {
          response = t('kb.responses.default');
        }
      } else {
        // Portuguese queries
        if (queryLower.includes('preço') || queryLower.includes('preco') || queryLower.includes('custo')) {
          response = t('kb.responses.pricing');
        } else if (queryLower.includes('segurança') || queryLower.includes('seguranca') || queryLower.includes('privacidade')) {
          response = t('kb.responses.security');
        } else if (queryLower.includes('integração') || queryLower.includes('integracao')) {
          response = t('kb.responses.integration');
        } else {
          response = t('kb.responses.default');
        }
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  // Return a placeholder or nothing during server-side rendering
  if (!mounted) {
    return (
      <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div>
              <h3 className="font-medium text-white">Knowledge Base Chat</h3>
              <p className="text-xs text-slate-400">Powered by ZettaBase</p>
            </div>
          </div>
        </div>
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-slate-400">{t('kb.loading')}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
      {/* Chat header */}
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">{t('kb.header')}</h3>
          <p className="text-xs text-slate-400">{isPublic ? t('kb.public') : t('kb.internal')}</p>
        </div>
        <GlowingPulse className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-xs text-blue-400">
          {isPublic ? t('kb.publicMode') : t('kb.privateMode')}
        </GlowingPulse>
      </div>
      
      {/* Chat messages */}
      <div className="p-4 h-80 overflow-y-auto bg-slate-900/30">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-medium mb-2">{t('kb.askTitle')}</h3>
            <p className="text-slate-400 text-sm max-w-md">
              {t('kb.askDescription')}
            </p>
          </div>
        ) : (
          <div>
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message.text} isUser={message.isUser} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Source references */}
      {messages.length > 0 && !isTyping && !messages[messages.length - 1].isUser && (
        <div className="px-4 py-2 bg-slate-800/80 border-t border-slate-700">
          <p className="text-xs text-slate-400">{t('kb.sources.title')}:</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {sources.slice(0, 2 + Math.floor(Math.random() * 3)).map((source, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-slate-700 rounded-full">
                {source}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Chat input */}
      <div className="p-4 border-t border-slate-700 bg-slate-800/90">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={t('kb.inputPlaceholder')}
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!query.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors rounded-lg px-4 py-2 font-medium"
          >
            {t('kb.sendButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
