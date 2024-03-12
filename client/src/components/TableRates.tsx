import React from "react";
import { DataCell, HeaderCell, Table, TableBody, TableHead, TableRow } from "../styles/TableRates.css";
import { Rate } from "../types/Rate";

type TableRatesType = {
  rates: Array<Rate>;
};

const RatesTable: React.FC<TableRatesType> = ({ rates }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <HeaderCell>Country</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Code</HeaderCell>
          <HeaderCell>Rate</HeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rates.map((rate, index) => (
          <TableRow key={index}>
            <DataCell>{rate.country}</DataCell>
            <DataCell>{rate.currency}</DataCell>
            <DataCell>{rate.amount}</DataCell>
            <DataCell>{rate.currencyCode}</DataCell>
            <DataCell>{rate.rate.toFixed(3)}</DataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RatesTable;
