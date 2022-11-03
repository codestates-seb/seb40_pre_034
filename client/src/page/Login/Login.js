import styled from "styled-components";
import LoginLogo from "./LoginLogo";
import SocialBtn from "./SocialBtn";
import LoginInput from "./LoginInput";
import SingupInfoAdd from "../../components/SignupInfo/SignupInfoAdd";

const LoginContainer = styled.section`
  background-color: hsl(210, 8%, 95%);
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Items = styled.div``;

const Login = () => {
  return (
    <LoginContainer>
      <Content>
        <Items>
          <LoginLogo />
          <SocialBtn />
          <LoginInput />
          <SingupInfoAdd />
        </Items>
      </Content>
    </LoginContainer>
  );
};
export default Login;
