import AnthropicBedrock from "@anthropic-ai/bedrock-sdk"
import { HttpsProxyAgent } from 'https-proxy-agent';

const clientConfig = {
  awsRegion: 'us-west-2',
  ...(process.env.HTTP_PROXY && { httpAgent: new HttpsProxyAgent(process.env.HTTP_PROXY) })
}

export const client = new AnthropicBedrock(clientConfig)
