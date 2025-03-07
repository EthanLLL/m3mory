import { client } from "../llm.js"

const prompt = ``

const tools = [{
  name: 'extractMemory',
  description: 'Use this tool to extract memory from chat messages',
  input_schema: {
    type: 'object',
    properties: {
      semantic: {
        type: 'object',
        description: 'Key Value pair, eg: name: xx, age: 20'
      },
      episodic: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Important interaction events'
        }
      },
      procedural: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Processing methods and response patterns'
        }
      },
    },
    required: ['semantic', 'episodic', 'procedural'],
  }
}]

export async function filter(memorys) {

  const response = await client.messages.create({
    model: 'anthropic.claude-3-5-sonnet-20241022-v2:0',
    max_tokens: 2048,
    messages: [{
      role: 'user',
      content: memorys.map(mem => `${mem.role}: ${msg.content}`).join('\n')
    }],
    tools: tools,
    tool_choice: {
      type: 'tool',
      name: 'extractMemory'
    },
    system: prompt
  })
  console.log(response)
  console.log(response.content[0].input)
  return response.content[0].input
}
