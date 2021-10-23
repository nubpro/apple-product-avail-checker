import cheerio from "cheerio";
import axios from "axios";

exports.handler = async (event, context) => {
  const { status, data } = await axios.get(event.url);

  if (status !== 200) {
    throw new Error(`Page is down. Status code ${status}`);
  }

  const $ = cheerio.load(data);
  const button = $(".ac-ln-button").first();
  const actionText = button.text().trim().split(" ")[0];
  // TODO: don't compare with text, because different region uses different lang
  // note: Apple.com (US) will potentially use the word "order" instead of "buy",
  // this makes it difficult to differentiate using `data-analytics-title` attrib.
  // because it still uses 'shop' despite being able to purchase online
  // in other regions, 'shop' means the product is not yet available

  const canBuy = actionText.toLowerCase() === "buy";
  const canOrder = actionText.toLowerCase() === "order";
  const isAvailable = canBuy || canOrder;

  return { isAvailable };
};
