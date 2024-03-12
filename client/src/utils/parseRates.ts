import { Rate } from "../types/Rate";

export const CNB_DAILY_RATES_URL = "http://localhost:8080/getdata";
const CSV_SEPARATOR = "|";

export const parseTxtIntoRates = (text: string): Array<Rate> => {
  const rows = text.split("\n");
  return rows.slice(2, rows.length - 1).map((row: string): Rate => {
    const values = row.split(CSV_SEPARATOR);
    return {
      country: values[0] ?? "",
      currency: values[1] ?? "",
      amount: parseInt(values[2]) ?? 1,
      currencyCode: values[3] ?? "",
      rate: parseFloat(values[4]) ?? 1
    };
  });
};
