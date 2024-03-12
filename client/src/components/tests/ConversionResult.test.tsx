import React from "react";
import { mockRates } from "../../mock/mockRates";
import { convertCzkToOther } from "../../utils/conversion";

describe("currencyConversion", () => {
  it("converts CZK to other currency with rate amount 1", () => {
    const result = convertCzkToOther(100, "BRL", mockRates);
    expect(result).toBeCloseTo(21.515);
  });

  it("converts CZK to other currency with rate amount different than 1", () => {
    const result = convertCzkToOther(100, "RON", mockRates);
    expect(result).toBeCloseTo(19.658888);
  });

  it("throws error if the rate for target currency is not available", () => {
    expect(() => convertCzkToOther(100, "ABC", mockRates)).toThrow("Unknown rate for currency ABC");
  });
});
