import React, { useState } from "react";
import { InputAmount, Select, Button } from "../styles/ConverterForm.css";

type CurrencyConverterFormType = {
  availableCurrencyCodes: Array<string>;
  onFormSubmitted: (amountInCzk: number, targetedCurrencyCode: string) => void;
};

const ConverterForm: React.FC<CurrencyConverterFormType> = ({ availableCurrencyCodes, onFormSubmitted }) => {
  const [amount, setAmount] = useState<string>("");
  const [currencyCode, setCurrencyCode] = useState<string>(availableCurrencyCodes[0]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrencyCode(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const parsedAmount = parseFloat(amount) || 0;
    onFormSubmitted(parsedAmount, currencyCode);

    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>From</span>
      <InputAmount id="input-amount" type="number" placeholder="Enter amount" value={amount} onChange={handleInputChange} />
      <span>CZK to</span>
      <Select name="currency-code" value={currencyCode} onChange={handleSelectChange}>
        {availableCurrencyCodes.map((currencyCode, index) => (
          <option key={index} value={currencyCode}>
            {currencyCode}
          </option>
        ))}
      </Select>
      <Button>Convert</Button>
    </form>
  );
};
export default ConverterForm;
