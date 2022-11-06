import styled from "styled-components";
import { CardStyle } from "../../components/SideCard/CardStyle";
import Checkbox from "../../components/Checkbox/Checkbox";
// import BlueButton from "../../components/Button/BlueButton";
import LogoutIcon from "./LogoutIcon";
import axios from "axios";
// import { useEffect } from "react";

const LogoutContainer = styled.section`
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

const Title = styled.div`
  max-width: calc((97.2307692rem / 12) * 5);
  text-align: center;
  font-size: 1.61538462rem;
  margin-bottom: 24px;
`;
const CardContainer = styled.div`
  border-radius: 6px;
  padding: 24px;
  background-color: hsl(0, 0%, 100%);
`;

const BtnArea = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
`;

const Anchor = styled.a`
  margin: 2px;
  display: inline-block;
  padding: 0.8em;
  color: hsl(206, 100%, 40%);
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  font-weight: normal;
  line-height: calc(15 / 13);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const AnchorBox = styled.div`
  margin-left: 4px;
  & :hover {
    color: hsl(209, 100%, 37%);
    background: hsl(206, 100%, 97%);
    text-decoration: none;
  }
`;

const ExtraInfo = styled.div`
  max-width: 489px;
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  text-align: left;
`;

const BlueButton2 = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  border: 1px solid hsl(206, 100%, 52%);
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:active {
    background-color: hsl(209, 100%, 37.5%);
  }
`;
const Logout = ({ userInfo, setIsLogin, setUserInfo }) => {
  // const onClickHandler = () => {
  //   axios
  //     // eslint-disable-next-line no-undef
  //     .get(`${process.env.REACT_APP_API_URL}members/logout`)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };

  // {
  // if (res.data) {
  // navigate("/login");
  //페이지 전환하기
  // } else {
  // alert("로그아웃에 실패했습니다");
  // }
  // }

  const logoutHandler = () => {
    return (
      axios
        // eslint-disable-next-line no-undef
        //     .post(`${process.env.REACT_APP_API_URL}members/logout`,userInfo)
        .post("http://localhost:4000/users", userInfo)
        .then((res) => {
          setUserInfo(null);
          setIsLogin(false);
          console.log(res);
        })
        .catch((err) => {
          alert(err);
        })
    );
  };
  return (
    <LogoutContainer>
      <Content>
        <Title>Clicking “Log out” will log you out of the following domains on this device:</Title>
        <CardStyle>
          <CardContainer>
            <LogoutIcon />
            <Checkbox text="Log out on all devices" />
            <BtnArea>
              <BlueButton2 /*onClick={onClickHandler}*/ onClick={logoutHandler}>Log out</BlueButton2>
              <AnchorBox>
                <Anchor href="/"> Cancel</Anchor>
              </AnchorBox>
            </BtnArea>
            <ExtraInfo>
              If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack
              Exchange, etc.) as well.
            </ExtraInfo>
          </CardContainer>
        </CardStyle>
      </Content>
    </LogoutContainer>
  );
};

export default Logout;
