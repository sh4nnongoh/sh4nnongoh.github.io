---
title: Context Engineering
description: Describing my context engineering journey.
date: 2026-02-16
tags: LLM, AI Agents, Go, Context Engineering, TL2
---

In the [previous post](/blog/9-ai-agents), Ollama was setup locally and it can be queried upon through the [HTTP API](https://github.com/ollama/ollama/blob/main/docs/api.md). The question now is how do we enhance the _LLM_ with tools such that it can help the users achieve what they want, **without over-engineering** a solution.

<div class="message-box">
	<p><em>
  IMPORTANT! DO NOT OVER-ENGINEER A SOLUTION!
  <br><br>REPEAT AFTER ME.<br><br>
  DO NOT OVER-ENGINEER A SOLUTION!
  </em></p>
</div>

It is so easy to fall into the trap of over-engineering. If the _LLM_ does not respond correctly, excited engineers may just start writing _IF-ELSE_ statements to correct the answer. Do not get in the LLM way. If there is no straight forward path with a prompt and one level of depth of tools, just ask your scientist to give you a better model.

## Start Simple

Let's start with a simple scenario.

```
Prompt: What is 1+1?
Response:
{
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{ \"result\": \"2\" }"
  },
  // ...
}

Prompt: What is a LLM?
Response:
{
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{ \"answer\": \"A Large Language Model (LLM) is an artificial intelligence model that can generate human-like text based on input data. It has been trained on vast amounts of text data and can understand, analyze, and generate language in various ways.\" }"
  },
  // ...
}
```

Asking 2 different simple questions, will result in totally 2 different responses with differing data structures. One stores the reply in a result field while the other stores it in the answer field. As an engineer, we need to deterministically retrieve the responses in a structured manner. Luckily there is the Format field we can pass in during the request.

## Format Responses

```go
type OllamaResponseFormat struct {
	Type       string                       `json:"type,omitempty"`
	Properties map[string]map[string]string `json:"properties,omitempty"`
	Required   []bool                       `json:"required,omitempty"`
}
// Request Object
{
  // ...
  OllamaResponseFormat{
    Type:       "object",
    Properties: map[string]map[string]string{
      "answer": {
        "type": "string",
      },
    }
  }
}
```

By setting the format before prompting, we can get structured responses as shown below, where all replies are within the answer field and it must be a string.

```
Prompt: What is 1+1?
Response:  {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{ \"answer\": \"2\" }"
  },
  // ...
}

Prompt: What is a LLM?
Response:  {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{ \"answer\": \"A Large Language Model (LLM) is an artificial intelligence model that can generate human-like text based on input data. It has been trained on vast amounts of text data and can be used for various applications such as language translation, summarization, question answering, and more.\" }"
  },
  // ...
}
```

## Supercharge the LLM with Tools

As mentioned earlier we need to enhance the _LLM_ with tools such that it can do more than what it was trained to do.

The structure of a Tool is shown below.

```go
type OllamaFunctionParameter struct {
	Type       string          `json:"type" description:"Return type of the current function."`
	Required   []string        `json:"required" description:"Which parameters are required in the function call."`
	Properties json.RawMessage `json:"properties" description:"Details about the parameters."`
}

type OllamaFunction struct {
	Name        string                  `json:"name" description:"Name of the Function."`
	Description string                  `json:"description" description:"What the Function does."`
	Parameters  OllamaFunctionParameter `json:"parameters" description:"Parameters that get passed to the Function."`
}

type OllamaTool struct {
	Type     string         `json:"type" description:"The type of Tool; i.e. Function"`
	Function OllamaFunction `json:"function" description:"A Tool that is of Function type."`
}
{% raw %}
tools := []OllamaTool{{
		Type: "function",
		Function: OllamaFunction{
			Name:        "GetWeatherTemperature",
			Description: "Get the Temperature.",
			Parameters:  OllamaFunctionParameter{},
		},
	}, {
		Type: "function",
		Function: OllamaFunction{
			Name:        "GetTime",
			Description: "Get the Time.",
			Parameters:  OllamaFunctionParameter{},
		},
	}, {
		Type: "function",
		Function: OllamaFunction{
			Name:        "GetLLMDefinition",
			Description: "Get the LLM definition.",
			Parameters:  OllamaFunctionParameter{},
		},
	}
}
{% endraw %}
```
Let's ask the _LLM_, what the weather is.

When querying with the Tools defined, the response is as follows:

```
Prompt: What is the Weather now?
Response: {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{\"answer\":\"GetWeatherTemperature\"}"
  },
  // ...
}
```

We can then Prompt again with the Tool result as follows:

```go
type OllamaMessage struct {
	Role    string `json:"role" description:"Who is requesting the message."`
	Content string `json:"content" description:"The actual message content."`
}
// Request Object
{% raw %}{
  // ...
  []OllamaMessage{{
    Role:    "user",
    Content: "What is the Weather now?",
  }, {
    Role:    "assistant",
    Content: "{\"answer\": \"GetWeatherTemperature\"}",
  }, {
    Role: "tool",
    Content: "11 degrees celsius",
  }}
}{% endraw %}

```

The second Prompt request includes the conversation history along with the Tool call and its result.

The response can be seen below.

```
Response:  {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{\"answer\": \"The current temperature is 11 degrees Celsius.\"}"
  },
  // ...
}
```

## Hallucination

```
Prompt: What is the time now?
Response: {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{\"answer\":\"1683240000\\"}"
  },
  // ...
}
```

When querying with the Prompt above, the _LLM_ assumes that it knows the answer, but it is clearly wrong.

Because we expect an _'answer'_ as defined in Format options, the _LLM_ responds with what it assumes is the current time.


```go
// Request Object
{% raw %}{
  // ...
  OllamaResponseFormat{
    Type:       "object",
    Properties: map[string]map[string]string{
      "answer": {
        "type": "string",
      },
      "function_call": {
        "type": "string",
      },
    }
  }
}{% endraw %}
```

By adding a new field _function_call_ to the Format options, we allow the _LLM_ to make a choice to call a Tool.

The response is as follows:

```
Response: {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{\"function_call\": \"GetTime\"}"
  },
  // ...
}
```

We can see that the _LLM_ now uses the Tool to get the time.

## Testing the changes with other Prompts

Let's ask the _1+1_ question again.

```
Prompt: What is 1+1?
Response: {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{\"function_call\":\"GetLLMDefinition\\\"}"
  },
  // ...
}
```

_What... Why is it asking for LLM definition???_

If we remove all the Tools from the Prompt request, then it can respond with the answer _"2"_.

## Dynamic Contexts

We need a way to dynamically inject tools to the Prompt request. However, remember that we **DO NOT WANT** to over-engineer a solution.

Let's ask the LLM to do it for us.

```
System Prompt:
Tools available:
- GetWeatherTemperature: Get the current temperature.
- GetTime: Get the current time.
- GetLLMDefinition: Get the definition of a LLM.

Prompt:
What tool is needed to answer the question "What is 1+1?"
You may return empty string if no suitable tool is available.

Response: {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{\"function_call\":\"\\\"}"
  },
  // ...
}
```

After defining the Tools available in the System Prompt, we ask the _LLM_ to setup which Tools we should use for our Prompt. In this scenario, none of the Tools are compatible to answer the question _"What is 1+1?"_

Now we can programmatically know to not send the Tools with the Prompt, allowing the _LLM_ to derive the answer.

```
Prompt: What is 1+1?
Response:  {
  "model": "qwen2.5-coder:3B",
  "message": {
    "role": "assistant",
    "content": "{ \"answer\": \"2\" }"
  },
  // ...
}
```

## Conclusion

- Start simple with the goal of defining the structure of the responses.
- Iterate across sample prompts, to catch edge cases.
- Establish 2-stage prompting, whereby the _LLM_ first decides what _Tools_ to use, followed by fulfilling the actual prompt made by the user using the insight gained on the compatibility of _Tools_ available in the first prompt.

By following the above methodology, I believe an _"AI Engineer"_ may find more success in achieving business objectives!

<style>{% include "css/message-box.css" %}</style>
