import styled from "styled-components";

import SignupIntro from "../../components/SignupInfo/SignupIntro";
import InputBox from "../../components/Input/InputBox";
import BlueButton from "../../components/Button/BlueButton";

const Container = styled.div`
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignupContainer = styled.div`
  margin-left: 100px;
`;

const SignupForm = styled.form`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 7px;
  padding: 20px;
  margin-bottom: 10px;
  max-width: 330px;

  p {
    font-size: 12px;
    color: #6a737c;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const CheckboxContainer = styled.div``;

const Signup = () => {
  return (
    <Container>
      <SignupIntro />
      <SignupContainer>
        {/* 소셜로그인 버튼자리 */}
        <SignupForm>
          <InputContainer>
            <div>Display name</div>
            <InputBox />
          </InputContainer>
          <InputContainer>
            <div>Email</div>
            <InputBox />
          </InputContainer>
          <InputContainer>
            <div>Password</div>
            <InputBox />
          </InputContainer>
          <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
          <CheckboxContainer></CheckboxContainer>
          <BlueButton text="Sign up" width="268px" />
          {/* SignupInfo자리 */}
        </SignupForm>
      </SignupContainer>
    </Container>
  );
};

export default Signup;
