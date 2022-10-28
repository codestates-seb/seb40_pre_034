import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #9199a1;
`;

const SocialList = styled.ul`
  display: flex;

  li {
    margin-right: 10px;
  }

  a {
    color: #9199a1;
  }
`;

const Policy = styled.p``;

const FooterCopyright = () => {
  return (
    <Container>
      <SocialList>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="/">LinkedIn</a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
      </SocialList>
      <Policy>
        Site design / logo © 2022 Stack Exchange Inc; user
        <br />
        contributions licensed under CC BY-SA rev 2022.8.24.42908
      </Policy>
    </Container>
  );
};

export default FooterCopyright;
