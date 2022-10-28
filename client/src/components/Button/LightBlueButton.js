import styled from "styled-components";

const LightBlueButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border: 1px solid hsl(205, 47%, 42%);
  border-color: hsl(205, 41%, 63%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #b3d3ea;
  }
  &:active {
    background-color: hsl(205, 56%, 76%);
    border-color: hsl(205, 36%, 53%);
    box-shadow: none;
  }
`;

const InnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.9;
`;

const LightBlueButton = ({ text, width }) => {
  return (
    <LightBlueButtonStyle width={width}>
      <InnerText>{text}</InnerText>
    </LightBlueButtonStyle>
  );
};

export default LightBlueButton;

{
  /* 사용 예시 
  <LightBlueButton text="Something" />

 */
}
