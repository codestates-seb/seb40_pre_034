import { useForm } from "react-hook-form";
import styled from "styled-components";
import BlueButton from "../../components/Button/BlueButton";
import { CardStyle } from "../../components/SideCard/CardStyle";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputArea = styled.div`
  width: 316px;
  background-color: hsl(0, 0%, 100%);
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const InputForm = styled.form`
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

const ErrorMSG = styled.div`
  color: rgb(222, 79, 84);
  margin-bottom: 6px;
`;

const LoginInput = ({ setUserInfo, setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));

    const login = {
      username: data.email,
      password: data.password,
    };

    axios
      // eslint-disable-next-line no-undef
      .post(`${process.env.REACT_APP_API_URL}members/login`, login)
      .then((res) => {
        if (res.headers.authorization) {
          localStorage.setItem("accessToken", res.headers.authorization);
          localStorage.setItem("refreshToken", res.headers.refresh);
          // axios.defaults.headers.common["Authorization"] = `${res.headers.authorization}`;
        }

        setIsLogin(true);
        setUserInfo(res.data.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <CardStyle width="316px">
      <InputArea>
        <InputForm onSubmit={handleSubmit(onSubmit)}>
          <InputTxt htmlFor="email">Email</InputTxt>
          <Input
            id="email"
            type="text"
            placeholder="Example@email.com"
            {...register("email", {
              required: "???????????? ?????? ???????????????.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "????????? ????????? ?????? ????????????.",
              },
            })}
            onChange={handleInputValue("username")}
          />
          {errors.email && <ErrorMSG role="alert">{errors.email.message}</ErrorMSG>}
          <PwArea>
            <InputTxt htmlFor="password">Password</InputTxt>
            <Anchor2 href="/">forgot password?</Anchor2>
          </PwArea>
          <Input
            id="password"
            type="password"
            placeholder="********"
            {...register("password", {
              required: "??????????????? ?????? ???????????????.",
              minLength: {
                value: 8,
                message: "8?????? ?????? ??????????????? ???????????????.",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
                message: "??????, ??????, ???????????? ???????????? 8-20?????? ?????? ??????????????????.",
              },
            })}
            onChange={handleInputValue("password")}
          />
          {errors.password && <ErrorMSG role="alert">{errors.password.message}</ErrorMSG>}
          <BlueButton
            text="Log in"
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            onSubmit={handleSubmit(onSubmit)}
          />
        </InputForm>
      </InputArea>
    </CardStyle>
  );
};

export default LoginInput;
