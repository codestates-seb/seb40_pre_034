import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import SignupInfo from "../../components/SignupInfo/SignupInfo";
import SignupIntro from "../../components/SignupInfo/SignupIntro";
import SignupInfoAdd from "../../components/SignupInfo/SignupInfoAdd";
import SignupInput from "./SignupInput";
import BlueButton from "../../components/Button/BlueButton";
import SocialBtn from "../Login/SocialBtn";

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
  margin-bottom: 30px;
  max-width: 316px;

  p {
    color: #6a737c;
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
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");

  const isValid = (type, value) => {
    const pattern = {
      nickname: /[A-Za-z0-9]{4,12}/,
      email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/i,
      password: /[(a-zA-Z0-9)`~!@#$%^&-_=\\+]{8,12}/,
    };

    if (type === "nickname") {
      return pattern.nickname.test(value);
    } else if (type === "email") {
      return pattern.email.test(value);
    } else {
      return pattern.password.test(value);
    }
  };

  const checkInputVal = () => {
    if (name.length <= 0) {
      setNameErrorMsg("Name cannot be empty");
    } else if (!isValid("nickname", name)) {
      setNameErrorMsg(`${name} is not a valid name`);
    }

    if (email.length <= 0) {
      setEmailErrorMsg("Email cannot be empty");
    } else if (!isValid("email", email)) {
      setEmailErrorMsg(`${email} is not a valid email address`);
    }

    if (password.length <= 0) {
      setPwdErrorMsg("Password cannot be empty");
    } else if (!isValid("password", password)) {
      setPwdErrorMsg(`${password} is not a valid password`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkInputVal();

    axios
      .post("/members/signup", {
        nickName: name,
        email: email,
        password: password,
      })
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <SignupIntro />
      <SignupContainer>
        <SocialBtn />
        <SignupForm>
          <SignupInput title="Display name" value={name} handleValue={setName} errorMsg={nameErrorMsg} />
          <SignupInput title="Email" value={email} handleValue={setEmail} errorMsg={emailErrorMsg} />
          <SignupInput
            title="Password"
            type="password"
            value={password}
            handleValue={setPassword}
            errorMsg={pwdErrorMsg}
          />
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
        <SignupInfoAdd />
      </SignupContainer>
    </Container>
  );
};

export default Signup;
