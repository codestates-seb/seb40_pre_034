import styled from "styled-components";

const InputContainer = styled.div`
  color: hsl(210, 8%, 5%);
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "268px")};
  padding: 8px 10px;
  height: 35px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  &:focus {
    border-color: #0a95ff;
    outline: none;
  }
`;

const InputBox = ({ type = "text", value, handleValue }) => {
  return (
    <InputContainer className="inputContainer">
      <Input type={type} defaultValue={value} onChange={(e) => handleValue(e.target.value)} />
    </InputContainer>
  );
};

export default InputBox;
