import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchImg } from "../../assets/search.svg";

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  svg {
    position: absolute;
    margin-left: 10px;
  }
`;

const SearchInput = styled.input`
  border-radius: 3px;
  border: 1px solid #babfc4;
  background: #fff;
  width: 100%;
  height: 32px;
  padding-left: 35px;
  &::placeholder {
    color: #838c95;
  }
`;

const Search = () => {
  return (
    <Container>
      <SearchImg />
      <SearchInput type="text" placeholder="Search..." />
    </Container>
  );
};
export default Search;

