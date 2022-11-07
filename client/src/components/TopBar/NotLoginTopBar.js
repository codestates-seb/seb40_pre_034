import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaStackExchange } from "react-icons/fa";

import LightBlueButton from "../Button/LightBlueButton";
import BlueButton from "../Button/BlueButton";
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
  width: 164px;
  height: 50px;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;

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

const Nav = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  text-align: center;
  align-items: center;
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

const BtnArea2 = styled.div`
  display: flex;
  text-align: center;
  padding-right: 12px;
`;

const AddStyle = styled.div`
  margin-left: 5px;
`;

const NotLoginTopBar = () => {
  return (
    <HeaderContainer>
      <TopBarContainer>
        <Link to="/">
          <LogoContainer>
            <LogoArea />
          </LogoContainer>
        </Link>

        <Nav>
          <NavItems>
            <NavAnchor href="/">About</NavAnchor>
          </NavItems>
          <NavItems>
            <NavAnchor href="/">Products</NavAnchor>
          </NavItems>
          <NavItems>
            <NavAnchor href="/">For Teams</NavAnchor>
          </NavItems>
        </Nav>

        <SearchBar width="700px" />

        <BtnArea2>
          <Link to="/login">
            <LightBlueButton text="Log in" />
          </Link>
          <AddStyle>
            <Link to="/signup">
              <BlueButton text="Sign up" />
            </Link>
          </AddStyle>
        </BtnArea2>
      </TopBarContainer>
    </HeaderContainer>
  );
};

export default NotLoginTopBar;
