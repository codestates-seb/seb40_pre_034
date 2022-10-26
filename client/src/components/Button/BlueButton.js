import styled from "styled-components";

const BlueButtonStyle = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:active {
    background-color: hsl(209, 100%, 37.5%);
  }
`;

const BlueButton = ({ text, width }) => {
  return <BlueButtonStyle width={width}>{text}</BlueButtonStyle>;
};

export default BlueButton;

{
  /* 사용 예시
 <BlueButton text="Ask Question" width="200px" /> */
}
