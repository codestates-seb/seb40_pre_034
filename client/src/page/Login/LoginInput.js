import styled from "styled-components";
import BlueButton from "../../components/Button/BlueButton";
import { CardStyle } from "../../components/SideCard/CardStyle";
// import InputBox from "../../components/Input/InputBox";
// import { MdError } from "react-icons/md";

const InputArea = styled.div`
  background-color: hsl(0, 0%, 100%);
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const InputTiTle = styled.div`
  margin-top: 6px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const InputTxt = styled.label`
  margin: 2px;
  cursor: pointer;
  font-size: 1.15384615rem;
  font-weight: 600;
  padding: 0 2px;
`;

const PwArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Anchor2 = styled.a`
  color: hsl(206, 100%, 40%);
  font-size: 13px;
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
    outline: 4px solid hsl(206, 96%, 90%);
  }
`;

const FailInput = styled.input`
  width: ${(props) => (props.width ? props.width : "268px")};
  padding: 8px 10px;
  margin-bottom: 10px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid rgb(222, 79, 84);
  &:focus {
    border-color: red;
    outline: 4px solid rgb(249, 210, 211);
  }
`;

const ErrorMSG = styled.div`
  color: rgb(222, 79, 84);
`;

// const isCorrectID = () => {};
// const isCorrectPW = () => {};
// const isMoreThan8 = () => {};

const LoginInput = () => {
  return (
    <CardStyle width="100%">
      <InputArea>
        <InputTiTle>
          <InputTxt>Email</InputTxt>
          <Input />
          <FailInput type="text" placeholder="Example@example.com"></FailInput>
          <ErrorMSG>The email is not a valid email address.</ErrorMSG>
          <ErrorMSG>The email or password is incorrect.</ErrorMSG>
        </InputTiTle>
        <InputTiTle>
          <PwArea>
            <InputTxt>Password</InputTxt>
            <Anchor2 href="/">forgot password?</Anchor2>
          </PwArea>
          <Input />
        </InputTiTle>
        <BlueButton text="Log in" width="268px" />
      </InputArea>
    </CardStyle>
  );
};

export default LoginInput;
