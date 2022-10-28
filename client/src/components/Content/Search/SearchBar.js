import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  .searchArea{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }
  svg{
    position: absolute;
    padding-left: 7px;
  }
`;

const Input = styled.input`
  padding: 0.5rem 0.7rem;
  text-indent: 1rem;
  width: 100%;
  border: 1px solid #BABFC3;
  border-radius: 5px;
  :focus{
    outline: 1px solid #6BBBF7;
    box-shadow: #D7E5F2 0px 0px 0px 5px;
  }
`;
const SearchBar = () => {
  return (
    <>
      <Container>
        <div className="searchArea">
          <Input placeholder="Search..." maxLength="240"></Input>
          <SearchGlass
            width="1rem"
            height="1rem"
            fill="#BABFC3"
          />
        </div>
      </Container>
    </>
  );
};

export default SearchBar;