import styled from "styled-components";

const InputBoxed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 15.7px;
  font-size: 12px;
  font-weight: 400;
  color: rgb(106, 115, 124);
  margin: 2px 0px;
  padding: 0px 2px;
  width: ${(props) => (props.width ? props.width : "268px")};
  height: 32px;
`;

const Forgot = styled.div`
  float: right;
  width: ${(props) => (props.width ? props.width : "650px")};
  font-size: 12px;
  color: rgb(0, 116, 204);
`;

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
        <div>Display name</div>
        <Input type="text" />
        <div>Email</div>
        <Input type="text" />
        <div>Password</div> <Forgot>Forgot password?</Forgot>
        <Input type="text" />
      </InputContainer>
      <InputBoxed>
        Passwords must contain at least eight characters, including at least 1 letter and 1 number.
      </InputBoxed>
    </>
  );
};

export default InputBox;
