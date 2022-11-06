import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaStackExchange } from "react-icons/fa";

import { BsInboxFill } from "react-icons/bs";
import { AiFillTrophy, AiFillQuestionCircle } from "react-icons/ai";
import WhiteButton from "../Button/WhiteButton";
import SearchBar from "../Search/SearchBar";

const HeaderContainer = styled.header`
  background-color: hsl(210, 8%, 97.5%);
  width: 100vw;
  height: 53px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-top: 3px solid hsl(27, 90%, 55%);
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
`;
const LogoArea = styled.div`
  display: inline-block;
  background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
  background-position: 0 -500px;
  margin-left: 0;
  margin-right: 5px;
  width: 150px;
  height: 30px;
  margin-top: -4px;
  display: inline-block;
  text-indent: -9999em;
  text-align: center;
`;

const NavItems = styled.div`
  margin: 0 5px;
  padding: 5px 10px;
  &:hover {
    background-color: hsl(210, 8%, 90%);
    border-radius: 50px;
  }
`;

const NavAnchor = styled.a`
  color: hsl(210, 8%, 35%);
  font-size: 14px;
`;

const BtnArea1 = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 180px;
  margin: 0 4px;
  /* padding: 12px; */
`;

const IMG = styled.img`
  width: 26px;
  height: 26px;
`;

const AddStyle2 = styled.div`
  padding: 12px;
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
`;

const LoginTopBar = () => {
  return (
    <HeaderContainer>
      <TopBarContainer>
        <Link to="/question">
          <LogoContainer>
            <LogoArea />
          </LogoContainer>
        </Link>

        <NavItems>
          <NavAnchor href="/question">Products</NavAnchor>
        </NavItems>

        <SearchBar width="700px" />

        <>
          <AddStyle2>
            <IMG alt="profile" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" />
          </AddStyle2>
          <BtnArea1>
            <AddStyle2>
              <BsInboxFill size="24" color="hsl(210,8%,35%)" />
            </AddStyle2>
            <AddStyle2>
              <AiFillTrophy size="24" color="hsl(210,8%,35%)" />
            </AddStyle2>
            <AddStyle2>
              <AiFillQuestionCircle size="24" color="hsl(210,8%,35%)" />
            </AddStyle2>
            <Link to="/logout">
              <WhiteButton text="logout" />
            </Link>
          </BtnArea1>
        </>
      </TopBarContainer>
    </HeaderContainer>
  );
};

export default LoginTopBar;
