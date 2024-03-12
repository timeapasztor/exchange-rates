import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "./api/api";
import { Rate } from "./types/Rate";
import TableRates from "./components/TableRates";
import Converter from "./components/Converter";
import { AppWrapper, ConversionWrapper, ConverterWrapper, HeadingWrapper, TableWrapper } from "./styles/App.css";

export const App: React.FC = () => {
  const ratesQuery = useQuery<Array<Rate>>({
    queryKey: ["rates"],
    queryFn: fetchRates
  });

  if (ratesQuery.isLoading) {
    return <p>Loading exchange rates ...</p>;
  }
  if (ratesQuery.isError) {
    return <p>Unable to fetch rates</p>;
  }
  if (ratesQuery.data?.length === 0) {
    return <p>No exchange rates are available.</p>;
  }

  return (
    <AppWrapper>
      <ConverterWrapper>
        <HeadingWrapper>Currency conversion</HeadingWrapper>
        <ConversionWrapper>
          <Converter availableRates={ratesQuery.data} />
        </ConversionWrapper>
      </ConverterWrapper>
      <TableWrapper>
        <HeadingWrapper>Exchange rates</HeadingWrapper>
        <TableRates rates={ratesQuery.data} />
      </TableWrapper>
    </AppWrapper>
  );
};

export default App;
