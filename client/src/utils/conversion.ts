import { Rate } from "../types/Rate";

export const convertCzkToOther = (amountInCzk: number, targetCurrencyCode: string, rates: Array<Rate>): number => {
  const rate = rates.find((rate) => rate.currencyCode === targetCurrencyCode);
  if (rate === undefined) {
    throw new Error(`Unknown rate for currency ${targetCurrencyCode}`);
  }
  return (amountInCzk / rate.rate) * rate.amount;
};
