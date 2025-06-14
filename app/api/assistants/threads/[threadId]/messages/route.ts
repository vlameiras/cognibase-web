import { chatModel, systemPrompt } from "@/lib/openai";
import { openai as aiSdkOpenai } from "@ai-sdk/openai";
import { convertToCoreMessages, generateText } from "ai";
import { waitUntil } from "@vercel/functions";
import { Langfuse } from "langfuse";
import { NextRequest, NextResponse } from 'next/server';

const langfuse = new Langfuse({
  publicKey: process.env.LANGFUSE_PUBLIC_KEY,
  secretKey: process.env.LANGFUSE_SECRET_KEY,
  baseUrl: process.env.LANGFUSE_HOST,
});

// Define the type for the request body
interface RequestBody {
  messages?: Array<{
    role: 'user' | 'assistant' | 'system' | 'data';
    content: string;
  }>;
  action?: 'create-thread';
}

export async function POST(req: NextRequest) {
  // Get the threadId from the URL
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/');
  const threadId = pathParts[pathParts.length - 2]; // Get the second-to-last part which should be the threadId
  
  // If threadId is 'new', create a new thread
  if (threadId === 'new') {
    try {
      // Parse the request body to check for the action parameter
      const body = await req.json() as RequestBody;
      
      // Verify this is a thread creation request
      if (body.action === 'create-thread') {
        // For regular API, we'll just create a unique ID to track the conversation
        const newThreadId = `chat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        return NextResponse.json({ threadId: newThreadId, apiType: 'regular' });
      } else {
        return NextResponse.json(
          { error: 'Invalid action for thread creation' },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error('Error creating thread:', error);
      return NextResponse.json(
        { error: 'Failed to create thread' },
        { status: 500 }
      );
    }
  }
  
  // For regular message processing
  try {
    // Extract the `messages` from the body of the request
    const body = await req.json() as RequestBody;
    const messages = body.messages;
    
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: 'No messages provided' },
        { status: 400 }
      );
    }

    // Call the language model
    const result = await generateText({
      model: aiSdkOpenai(chatModel),
      system: systemPrompt,
      messages: convertToCoreMessages(messages),
      experimental_telemetry: {
        isEnabled: true,
      }
    });
    waitUntil(langfuse.flushAsync());
    // Respond with the stream
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
