import styled from "styled-components";

export const BlueButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;
{
  /* * width를 props로 내려주거나, 굳이 필요없으면 글씨 길이만큼 늘어납니다.
ex1)
<BlueButton>Ask Questions</BlueButton> 
<BlueButton width="200px">Ask Questions</BlueButton> 

ex2)
<BlueButton>Learn more about Collectives</BlueButton>
<BlueButton width="150px">Learn more about Collectives</BlueButton> */
}
