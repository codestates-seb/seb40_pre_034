import styled from "styled-components";

const PaginationButtonStyle = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  background-color: ${(props) => (props.checked ? "#F48225" : "hsl(0, 0%, 100%)")};
  color: hsl(210, 8%, 25%);
  border: calc(1px / 2) solid hsl(210, 8%, 85%);
  line-height: 0.5;
  box-shadow: none;
  &:hover {
    background-color: ${(props) => (props.checked ? "#F48225" : "#d6d9dc")};
  }
`;
const PaginationButton = ({ width, isChecked, text }) => {
  return (
    <PaginationButtonStyle width={width} checked={isChecked}>
      {text}
    </PaginationButtonStyle>
  );
};

export default PaginationButton;

{
  /*사용 예시 

<PaginationButton text="1" />
<PaginationButton text="next" /> 

<PaginationButton text="2" isChecked />
<PaginationButton text="prev" isChecked />
*/
}
