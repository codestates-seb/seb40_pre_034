import styled from "styled-components";

const WhiteButtonStyle = styled.button`
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

const WhiteButton = ({ text, width }) => {
  return <WhiteButtonStyle width={width}>{text}</WhiteButtonStyle>;
};
export default WhiteButton;

{
  /* 사용 예시 - width는 필요할 때만 사용하시면 됩니다.
  <WhiteButton text="join" width="200px" />
  <WhiteButton text="join" />
 */
}
