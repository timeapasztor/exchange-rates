import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import * as api from "../../api/api";
import { mockRates } from "../../mock/mockRates";

describe("App render", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const getAppToRender = (): JSX.Element => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false }
      }
    });

    return (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
  };

  it("renders the loading state when the rates are initially loading", () => {
    jest.spyOn(api, "fetchRates").mockImplementation(async () => new Promise(() => null));

    const { container } = render(getAppToRender());
    expect(container).toMatchSnapshot();
  });

  it("renders successfully the error message when no rates are available", async () => {
    jest.spyOn(api, "fetchRates").mockResolvedValue([]);

    const { container } = render(getAppToRender());
    await waitFor(() => screen.getByText(/No exchange rates are available/i));
    expect(container).toMatchSnapshot();
  });

  it("renders successfully when the rates are available", async () => {
    jest.spyOn(api, "fetchRates").mockResolvedValue(mockRates);

    const { container } = render(getAppToRender());
    await waitFor(() => screen.getByText(/Currency conversion/i));
    expect(container).toMatchSnapshot();
  });
});
