# Chat Widget Configuration

This document explains how to configure the chat widget to use either the OpenAI Assistants API or the regular OpenAI API.

## Environment Variables

Add the following variables to your `.env.local` file:

```
# OpenAI API Key (required)
OPENAI_API_KEY=your_openai_api_key

# Choose which API to use (true = Assistants API, false = regular API)
USE_ASSISTANTS_API=true

# For Assistants API
OPENAI_ASSISTANT_ID=your_assistant_id

# For regular API
OPENAI_MODEL=gpt-4o
SYSTEM_PROMPT="You are a helpful AI assistant for ZettaBase, a company that specializes in AI solutions for businesses. Answer questions concisely and professionally."
```

## API Selection

The chat widget will automatically use the API specified by the `USE_ASSISTANTS_API` environment variable:

- When `USE_ASSISTANTS_API=true`, the chat will use the OpenAI Assistants API with the assistant specified by `OPENAI_ASSISTANT_ID`
- When `USE_ASSISTANTS_API=false`, the chat will use the regular OpenAI API with the model specified by `OPENAI_MODEL`

## Model Selection

For the regular OpenAI API, you can specify any available model in the `OPENAI_MODEL` environment variable. Some examples:

- `gpt-4o` (default)
- `gpt-4-turbo`
- `gpt-3.5-turbo`

## System Prompt

When using the regular OpenAI API, you can customize the system prompt by setting the `SYSTEM_PROMPT` environment variable. This defines the initial instructions given to the model.
