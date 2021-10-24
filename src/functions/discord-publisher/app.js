import axios from "axios";

const ENV_VARIABLES = {
  test: {
    discordWebhook:
      "https://discord.com/api/webhooks/785812605917855744/hH7mcPbCpi7sTwBD-AHw-ZXTB03GtnarFWV-p9DIhSjrxdoN9mVA0_tLTSgNwpZK-_Q4",
  },
  prod: {
    discordWebhook:
      "https://discord.com/api/webhooks/783771622347374642/IuHBtsOSXxvCcJxgagi970-SpJoI9Yz12GUHXOAej21NTheAHAJy_m4C937JWznVmjS6",
  },
};

export async function sendMessage(content) {
  const discordWebhook = ENV_VARIABLES["test"].discordWebhook; //process.env.ENV

  const body = {
    content,
  };

  return axios.post(discordWebhook, body);
}

export const handler = async (event, context) => {
  await sendMessage(event.content);
};
