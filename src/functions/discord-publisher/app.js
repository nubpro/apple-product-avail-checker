import axios from "axios";

export async function sendMessage(content) {
  const discordWebhook = process.env.discordWebhook;

  const body = {
    content,
  };

  return axios.post(discordWebhook, body);
}

export const handler = async (event, context) => {
  await sendMessage(event.content);
};
