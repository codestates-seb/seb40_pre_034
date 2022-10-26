import styled from "styled-components";

export const PaginationButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  background-color: ${(props) => (props.checked ? "#F48225" : "hsl(0, 0%, 100%)")};
  color: hsl(210, 8%, 25%);
  border: calc(1px / 2) solid hsl(210, 8%, 85%);
  line-height: 0.5;
  box-shadow: none;
  &:hover {
    /* background-color: #d6d9dc; */
    background-color: ${(props) => (props.checked ? "#F48225" : "#d6d9dc")};
  }
`;
{
  /* * width를 props로 내려주거나, 굳이 필요없으면 글씨 길이만큼 늘어납니다.
  ex1)
      <PaginationButton>1</PaginationButton>
      <PaginationButton checked>1</PaginationButton>
      <PaginationButton>Prev</PaginationButton>
      <PaginationButton checked>next</PaginationButton> */
}
