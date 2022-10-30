import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import SignupInfo from "../../components/SignupInfo/SignupInfo";
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

  p {
    font-size: 12px;
    line-height: 16px;
  }
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;

  input {
    margin-right: 4px;
  }

  p {
    color: #000;
  }
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const isEmailValid = () => {
  //   const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  //   return pattern.test(email);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(isEmailValid(email));
    const user = {
      nickname: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4001/users", user)
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <SignupIntro />
      <SignupContainer>
        {/* 소셜로그인 버튼자리 */}
        <SignupForm>
          <InputContainer>
            <div>Display name</div>
            <InputBox value={name} handleValue={setName} />
          </InputContainer>
          <InputContainer>
            <div>Email</div>
            {/* 유효성 검사 */}
            <InputBox value={email} handleValue={setEmail} />
          </InputContainer>
          <InputContainer>
            <div>Password</div>
            <InputBox value={password} handleValue={setPassword} />
          </InputContainer>
          <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
          <CheckboxContainer>
            <input type="checkbox" />
            <p>
              Opt-in to receive occasional product updates, user research invitations, company announcements, and
              digests.
            </p>
          </CheckboxContainer>
          <BlueButton text="Sign up" width="268px" handleSubmit={handleSubmit} />
          <SignupInfo />
        </SignupForm>
        {/* SignupInfoAdd 자리 */}
      </SignupContainer>
    </Container>
  );
};

export default Signup;
