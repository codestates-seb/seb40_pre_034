import styled from "styled-components";

const InputContainer = styled.div`
  background-color: none;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "268px")};
  padding: 8px 9px;

  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 5%);
  font-size: 13px;

  &:focus {
    outline: none;
  }
`;

const InputBox = () => {
  return (
    <InputContainer className="inputContainer">
      <Input type="text" />
    </InputContainer>
  );
};

export default InputBox;
