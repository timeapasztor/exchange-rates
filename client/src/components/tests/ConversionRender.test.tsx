import React from "react";
import Conversion from "../Conversion";
import { render } from "@testing-library/react";

describe("Conversion", () => {
  it("renders successfully the conversion", () => {
    const props = {
      amountInCzk: 100,
      amountInTargetCurrency: 300,
      targetCurrencyCode: "EUR"
    };
    const { container } = render(
      <Conversion
        amountInCzk={props.amountInCzk}
        amountInTargetCurrency={props.amountInTargetCurrency}
        targetCurrencyCode={props.targetCurrencyCode}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
