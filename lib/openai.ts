import OpenAI from 'openai';
import { openaiConfig } from './config';

// Initialize the OpenAI client with API key from environment variable
export const openai = new OpenAI({
  apiKey: openaiConfig.apiKey,
});

// Determine if we should use the Assistants API or the regular API
export const useAssistantsApi = openaiConfig.useAssistantsApi;

// Get the model to use for regular API calls
export const chatModel = openaiConfig.model;

// System prompt for regular API
export const systemPrompt = openaiConfig.systemPrompt;
