import React, { useState } from "react";
import { Rate } from "../types/Rate";
import Conversion from "./Conversion";
import { convertCzkToOther } from "../utils/conversion";
import ConverterForm from "./ConverterForm";

type ConverterType = {
  availableRates: Array<Rate>;
};

const Converter: React.FC<ConverterType> = ({ availableRates }) => {
  const availableCurrencyCodes = availableRates.map((availableRate) => availableRate.currencyCode);

  const [amountInCzkToConvert, setAmountInCzkToConvert] = useState<number>(0);
  const [targetCurrencyCode, setTargetCurrencyCode] = useState<string>(availableCurrencyCodes[0]);

  const handleFormSubmit = (amountInCzkToConvert: number, targetedCurrencyCode: string): void => {
    setAmountInCzkToConvert(amountInCzkToConvert);
    setTargetCurrencyCode(targetedCurrencyCode);
  };

  const amountInTargetedCurrency = convertCzkToOther(amountInCzkToConvert, targetCurrencyCode, availableRates);

  return (
    <>
      <ConverterForm availableCurrencyCodes={availableCurrencyCodes} onFormSubmitted={handleFormSubmit} />
      <Conversion
        amountInCzk={amountInCzkToConvert}
        amountInTargetCurrency={amountInTargetedCurrency}
        targetCurrencyCode={targetCurrencyCode}
      />
    </>
  );
};

export default Converter;
