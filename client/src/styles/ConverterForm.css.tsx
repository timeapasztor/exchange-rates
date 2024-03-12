import styled from "styled-components";

export const InputAmount = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  margin: 0 15px;
  padding: 8px;
`;

export const Select = styled.select`
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  margin: 0 15px;
  padding: 8px;
`;

export const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 6px;
  border-style: none;

  margin-left: 15px;
  background-color: #339966;
  color: #ffffff;
  cursor: pointer;

  padding: 10px 20px;
  text-align: center;

  &:hover,
  &:focus {
    background-color: #333300;
  }
`;
