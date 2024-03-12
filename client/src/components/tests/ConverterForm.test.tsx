import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ConverterForm from "../ConverterForm";

describe("ConverterForm", () => {
  const availableCurrencyCodes = ["CZK", "AUD", "HUF"];

  it("renders successfully", () => {
    const { container } = render(<ConverterForm availableCurrencyCodes={availableCurrencyCodes} onFormSubmitted={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it("submits inputted data when button is clicked", () => {
    const onFormSubmittedMock = jest.fn();

    render(<ConverterForm availableCurrencyCodes={availableCurrencyCodes} onFormSubmitted={onFormSubmittedMock} />);

    fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "100" } });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "AUD" } });
    fireEvent.click(screen.getByRole("button"));

    expect(onFormSubmittedMock).toHaveBeenCalledWith(100, "AUD");
  });

  it("submits meaningful data if there is no input", () => {
    const onFormSubmittedMock = jest.fn();

    render(<ConverterForm availableCurrencyCodes={availableCurrencyCodes} onFormSubmitted={onFormSubmittedMock} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onFormSubmittedMock).toHaveBeenCalledWith(0, "CZK");
  });

  it("clears input after form submission", () => {
    render(<ConverterForm availableCurrencyCodes={availableCurrencyCodes} onFormSubmitted={jest.fn()} />);

    const amountInput = screen.getByRole("spinbutton");
    fireEvent.change(amountInput, { target: { value: "100" } });
    fireEvent.click(screen.getByRole("button"));

    expect(amountInput).toHaveValue(null);
  });
});
