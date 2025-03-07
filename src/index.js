import { map } from "./functions/map.js";

const messages = [
  {
    role: 'user',
    content: 'Send an email to my wife to ask her if we can buy a new Gaming PC.'
  },
  {
    role: 'assistant',
    content: 'Sure, what\'s your wife\'s email?'
  },
  {
    role: 'user',
    content: 'Her email address is wife@gmail.com'
  },
  {
    role: 'assistant',
    content: 'Email has been sent to your wife\'s email address'
  },
]

async function main() {
  await map(messages)
}
main().catch(console.error);
