# OpenAI Assistants API Integration for CogniBase

This document explains how to set up and use the OpenAI Assistants API integration with the CogniBase chat widget.

## Setup Instructions

1. Install the required dependencies:
   ```bash
   npm install openai react-markdown
   ```

2. Create a `.env.local` file in the root of your project with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_ASSISTANT_ID=your_assistant_id_here
   ```

   You can create an assistant through the [OpenAI Dashboard](https://platform.openai.com/assistants) or use the API route we've created at `/api/assistants` to create one programmatically.

## How It Works

The integration consists of several components:

1. **API Routes**:
   - `/api/assistants/threads` - Creates a new thread
   - `/api/assistants/threads/[threadId]/messages` - Sends messages to a thread
   - `/api/assistants/threads/[threadId]/actions` - Handles function calls

2. **ChatWidget Component**:
   - Manages the chat UI and interactions
   - Handles streaming responses from the OpenAI Assistants API
   - Renders markdown content from the assistant

## Customizing the Assistant

You can customize the assistant's behavior by modifying the instructions in `/app/api/assistants/route.ts`. The current instructions are:

```javascript
instructions: 'You are CogniBase\'s AI assistant. Help users understand CogniBase\'s AI solutions and services. Be friendly, professional, and provide accurate information about CogniBase\'s offerings.'
```

## Function Calling

The integration includes basic support for function calling. To implement specific functions:

1. Add function definitions to your assistant in the `/app/api/assistants/route.ts` file
2. Implement the function handlers in the `handleRequiresAction` method in the `ChatWidget.tsx` component

## Troubleshooting

- If you see errors about missing modules, make sure you've installed all required dependencies
- Check that your `.env.local` file contains the correct API key and assistant ID
- Verify that your assistant has been created successfully in the OpenAI dashboard
