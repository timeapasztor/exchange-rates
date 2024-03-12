import React from "react";

type ConversionType = {
  amountInCzk: number;
  amountInTargetCurrency: number;
  targetCurrencyCode: string;
};

const Conversion: React.FC<ConversionType> = ({ amountInCzk, amountInTargetCurrency, targetCurrencyCode }) => {
  const roundAmount = (amount: number): number => Math.round(amount * 1000) / 1000;

  const roundedAmountInCzk = roundAmount(amountInCzk);
  const roundedAmountInTargetCurrency = roundAmount(amountInTargetCurrency);

  return (
    <p>
      {roundedAmountInCzk} CZK = {roundedAmountInTargetCurrency} {targetCurrencyCode}
    </p>
  );
};

export default Conversion;
