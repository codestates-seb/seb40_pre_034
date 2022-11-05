import { useForm } from "react-hook-form";
import styled from "styled-components";
import BlueButton from "../../components/Button/BlueButton";
import { CardStyle } from "../../components/SideCard/CardStyle";
import axios from "axios";
// import { useState } from "react";
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

const LoginInput = (/*{ setUserInfo, setIsLogin }*/) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();
  // const [loginInfo, setLoginInfo] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleInputValue = (key) => (e) => {
  //   setLoginInfo({ ...loginInfo, [key]: e.target.value });
  // };

  // const onSubmit = async (data) => {
  //   await new Promise((r) => setTimeout(r, 1000));

  //   const loginInfo = {
  //     username: data.email,
  //     password: data.password,
  //   };
  //   console.log(loginInfo);

  //   axios
  //     // eslint-disable-next-line no-undef
  //     .post("http://localhost:4000/login", loginInfo)
  //     .then((res) => {
  //       // if (res.status === 201) {
  //       console.log(res);
  //       setIsLogin(true);
  //       setUserInfo(res.data);
  //       const { accessToken } = res.data;
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //       navigate("/");
  //       // }
  //     })
  //     .catch((err) => console.log("err:", err));
  // };

  //   axios
  //     // eslint-disable-next-line no-undef
  //     .post(`${process.env.REACT_APP_API_URL}members/login`, loginInfo)
  //     .then((res) => {
  //       // if (res.status === 201) {
  //       console.log(res);
  //       setIsLogin(true);
  //       setUserInfo(res.data);
  //       // const { accessToken } = res.data;
  //       // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //       navigate("/");
  //       // }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // 2
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));

    const login = {
      email: data.email,
      password: data.password,
    };
    console.log(login);

    axios
      // eslint-disable-next-line no-undef
      // .post(`${process.env.REACT_APP_API_URL}members/login`, login)
      .post("http://localhost:4000/login", login)

      .then((res) => {
        console.log(res);
        const { accessToken } = res.data;

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // 3
  // const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  // const onSubmit = async (data) => {
  //   await new Promise((r) => setTimeout(r, 1000));

  //   const login = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   console.log(login);

  //   axios
  //     // eslint-disable-next-line no-undef
  //     .post(`${process.env.REACT_APP_API_URL}members/login`, login)
  //     .then(onLoginSuccess)
  //     .catch((err) => console.log(err));
  // };

  // const onSilentRefresh = () => {
  //   axios
  //     // eslint-disable-next-line no-undef
  //     .post(`${process.env.REACT_APP_API_URL}members/login`, login) //여기 url 확인하고싶어,,,
  //     .then(onLoginSuccess)
  //     .catch((err) => console.log(err));
  // };

  // const onLoginSuccess = (res) => {
  //   const { accessToken } = res.data;

  //   // accessToken 설정
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  //   // accessToken 만료하기 1분 전에 로그인 연장
  //   setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  // };
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
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
            // onChange={handleInputValue("username")}
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
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
                message: "영문, 숫자, 특수기호 조합으로 8-20자리 이상 입력해주세요.",
              },
            })}
            // onChange={handleInputValue("password")}
          />
          {errors.password && <ErrorMSG role="alert">{errors.password.message}</ErrorMSG>}
          <BlueButton text="Log in" type="submit" disabled={isSubmitting} />
        </InputForm>
      </InputArea>
    </CardStyle>
  );
};

export default LoginInput;
