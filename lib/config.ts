/**
 * Configuration utilities for the application
 */
import { fullSystemPrompt } from '../config/system-prompt';

// Helper function to safely get environment variables
export function getEnvVar(key: string, defaultValue: string = ''): string {
  const value = process.env[key];
  return value !== undefined ? value : defaultValue;
}

// Helper to parse boolean environment variables
export function getBoolEnvVar(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key]?.toLowerCase();
  if (value === undefined) return defaultValue;
  return value === 'true' || value === '1' || value === 'yes';
}

// OpenAI configuration
export const openaiConfig = {
  apiKey: getEnvVar('OPENAI_API_KEY', ''),
  useAssistantsApi: getBoolEnvVar('USE_ASSISTANTS_API', true),
  assistantId: getEnvVar('OPENAI_ASSISTANT_ID', ''),
  model: getEnvVar('OPENAI_MODEL', 'gpt-4o'),
  // Use the system prompt from the dedicated file
  systemPrompt: fullSystemPrompt,
};

// Debug configuration values (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('=== OpenAI Configuration ===');
  console.log('- useAssistantsApi:', openaiConfig.useAssistantsApi);
  console.log('- model:', openaiConfig.model);
  console.log('- systemPrompt length:', openaiConfig.systemPrompt.length);
  if (openaiConfig.systemPrompt.length > 0) {
    console.log('- systemPrompt preview:', openaiConfig.systemPrompt.substring(0, 100) + '...');
  }
}
