import styled from "styled-components";
import LoginLogo from "./LoginLogo";
import SocialBtn from "./SocialBtn";
import LoginInput from "./LoginInput";

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

const Anchor = styled.a`
  color: hsl(206, 100%, 40%);
`;
const InfoContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;
  margin-bottom: 12px;
`;
const Info = styled.div`
  margin-bottom: 12px;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Content>
        <Items>
          <LoginLogo />
          <SocialBtn />
          <LoginInput />
          {/* signupInfoAdd 머지하고 pull한다음에 변경해주기 */}
          <InfoContainer>
            <Info>
              <span>Don`t have an account?</span>
              <Anchor href="/">Sign up</Anchor>
            </Info>
            <Info>
              <span>Are you an employer?</span>
              <Anchor href="/">
                Sign up on Talent
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
                    fill="hsl(206,100%,40%)"
                  ></path>
                </svg>
              </Anchor>
            </Info>
          </InfoContainer>
        </Items>
      </Content>
    </LoginContainer>
  );
};
export default Login;
