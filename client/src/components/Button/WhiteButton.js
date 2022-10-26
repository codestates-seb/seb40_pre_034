import styled from "styled-components";

export const WhiteButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(206, 100%, 40%);
  border: calc(1px / 2) solid hsl(206 85% 57%);
  background-color: hsl(0, 0%, 100%);
  &:hover {
    background-color: #f0f8ff;
  }
  &:active {
    background-color: hsl(206, 96%, 90%);
  }
`;

{
  /* * width를 props로 내려주거나, 굳이 필요없으면 글씨 길이만큼 늘어납니다.
  ex1)
  <WhiteButton>join</WhiteButton>
<WhiteButton width="150px">join</WhiteButton> */
}
