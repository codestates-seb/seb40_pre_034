import styled from "styled-components";

const InputContainer = styled.div`
  color: hsl(210, 8%, 5%);
  padding: 0px 2px;
  padding-top: 0px;
  padding-right: 2px;
  padding-bottom: 0px;
  padding-left: 2px;
  font-weight: 600;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "268px")};
  padding: 8px 10px;
  margin-bottom: 10px;
  height: 35px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  &:focus {
    border-color: #0a95ff;
    outline: none;
  }
`;

const InputBox = () => {
  return (
    <>
      <InputContainer className="inputContainer">
        <Input type="text" />
      </InputContainer>
    </>
  );
};

export default InputBox;
