import styled from "styled-components";

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
`;

export const HeaderCell = styled.th`
  border: none;
  padding: 8px 10px;
  border: 1px black solid;
`;

export const DataCell = styled.td`
  border: none;
  padding: 8px 10px;
`;

export const TableRow = styled.tr``;
export const TableHead = styled.thead`
  ${TableRow} {
    font-weight: 600;
    color: #ffffff;
    background: #339966;
  }
`;

export const TableBody = styled.tbody`
  ${TableRow} {
    border: 1px solid;
    ${DataCell}:nth-child(3),
    ${DataCell}:last-child {
      text-align: right;
    }
    ${DataCell}:nth-child(4) {
      text-align: center;
    }
  }
`;
