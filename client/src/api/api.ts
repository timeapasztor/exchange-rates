import { Rate } from "../types/Rate";
import { CNB_DAILY_RATES_URL, parseTxtIntoRates } from "../utils/parseRates";

export const fetchRates = async (): Promise<Array<Rate>> => {
  const response = await fetch(CNB_DAILY_RATES_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Error while fetching exchange rates from CNB, HTTP status: ${response.status}`);
  }
  const content = await response.text();
  return parseTxtIntoRates(content);
};
