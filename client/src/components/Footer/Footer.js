import styled from "styled-components";

import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterCopyright from "./FooterCopyright";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 30px 50px;
  background-color: #232629;
`;

const Footer = () => {
  return (
    <Container>
      <FooterLogo />
      <FooterNav />
      <FooterCopyright />
    </Container>
  );
};

export default Footer;
