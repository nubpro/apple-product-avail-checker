import cheerio from "cheerio";
import axios, { AxiosResponse } from "axios";

export const handler = async (event: { url: string }) => {
  const { status, data }: AxiosResponse<string> = await axios.get(event.url, {
    // query URL without using browser cache
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });

  if (status !== 200) {
    throw new Error(`Page is down. Status code ${status}`);
  }

  const $ = cheerio.load(data);
  const button = $(".ac-ln-button").first();
  const actionText = button.text().toLowerCase();
  // TODO: don't compare with text, because different region uses different lang
  // note: Apple.com (US) will potentially use the word "order" instead of "buy",
  // this makes it difficult to differentiate using `data-analytics-title` attrib.
  // because it still uses 'shop' despite being able to purchase online
  // in other regions, 'shop' means the product is not yet available

  const canBuy = actionText.includes("buy");
  const canOrder = actionText.includes("order");
  const canPreOrder = actionText.includes("pre-order");

  const isAvailable = canBuy || canOrder || canPreOrder;

  return {
    url: event.url,
    isAvailable,
  };
};
