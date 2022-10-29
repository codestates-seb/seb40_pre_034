import styled from "styled-components";
import BlueButton from "../../components/Button/BlueButton";
import { CardStyle } from "../../components/SideCard/CardStyle";
import SocialBtn from "./SocialBtn";
import InputBox from "../../components/Input/InputBox";
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

const LogoContainer = styled.div`
  text-align: center;
  font-size: 1.61538462rem;
  margin-bottom: 24px;
`;

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
const InputTxt = styled.div`
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

const Anchor = styled.a`
  color: hsl(206, 100%, 40%);
`;

const Anchor2 = styled.a`
  color: hsl(206, 100%, 40%);
  font-size: 13px;
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
        <div className="items">
          <LogoContainer>
            <a href="https://stackoverflow.com">
              <svg aria-hidden="true" width="32" height="37" viewBox="0 0 32 37">
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                ></path>
              </svg>
            </a>
          </LogoContainer>
          <SocialBtn />
          <CardStyle width="100%">
            <InputArea>
              <InputTiTle>
                <InputTxt>Email</InputTxt>
                <InputBox />
              </InputTiTle>
              <InputTiTle>
                <PwArea>
                  <InputTxt>Password</InputTxt>
                  <Anchor2 href="/">forgot password?</Anchor2>
                </PwArea>
                <InputBox />
              </InputTiTle>
              <BlueButton text="Log in" width="268px" />
            </InputArea>
          </CardStyle>
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
        </div>
      </Content>
    </LoginContainer>
  );
};
export default Login;
