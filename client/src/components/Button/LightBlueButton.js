import styled from "styled-components";

export const LightBlueButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border: calc(1px / 2) solid hsl(205, 47%, 42%);
  border-color: hsl(205, 41%, 63%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #b3d3ea;
  }
`;
{
  /* * width를 props로 내려주거나, 굳이 필요없으면 글씨 길이만큼 늘어납니다.
ex1)
      <LightBlueButton>test</LightBlueButton>
      <LightBlueButton width="200px">test</LightBlueButton> */
}
