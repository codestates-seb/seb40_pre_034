import React from "react";
import styled from "styled-components";

const Input = ({ children, value, type, onChange, sub }) => {
  return (
    <Container>
      <Box>
        <label htmlFor="title">{children}</label>
        <span>{sub}</span>
      </Box>

      <input
        defaultValue={value}
        onChange={onChange}
        type={type}
        autoComplete="off"
      />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-top: 7px;
  input {
    width: 100%;
    height: 33px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    margin-top: 5px;
    padding: 8px 9px;
    ::placeholder {
      color: red;
      font-style: italic;
    }
  }
`;

const Box = styled.div`
  label {
    padding: 0 2px;
    font-size: 15px;
    font-weight: 600;
  }
  span {
    float: right;
    font-size: 12px;
    color: #0074cc;
  }
`;