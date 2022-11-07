import styled from "styled-components";

const Container = styled.footer`
  display: flex;
`;

const FooterCol = styled.div`
  margin-right: 80px;
  font-weight: 500;

  h5 {
    color: #babfc4;
    margin-bottom: 20px;
  }

  li {
    margin-top: 15px;
    font-weight: 400;
  }

  a {
    color: #9199a1;
  }
`;

const FooterNav = () => {
  return (
    <Container>
      <FooterCol>
        <h5>STACK OVERFLOW</h5>
        <ul>
          <li>
            <a href="/">Questions</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
        </ul>
      </FooterCol>

      <FooterCol>
        <h5>PRODUCTS</h5>
        <ul>
          <li>
            <a href="/">Teams</a>
          </li>
          <li>
            <a href="/">Advertising</a>
          </li>
          <li>
            <a href="/">Collectives</a>
          </li>
          <li>
            <a href="/">Talent</a>
          </li>
        </ul>
      </FooterCol>

      <FooterCol>
        <h5>COMPANY</h5>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Work Here</a>
          </li>
          <li>
            <a href="/">Legal</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Cookie Settings</a>
          </li>
          <li>
            <a href="/">Cookie Policy</a>
          </li>
        </ul>
      </FooterCol>

      <FooterCol>
        <h5>STACK EXCHANGE NETWORK</h5>
        <ul>
          <li>
            <a href="/">Technology</a>
          </li>
          <li>
            <a href="/">Culture & recreation</a>
          </li>
          <li>
            <a href="/">Life & arts</a>
          </li>
          <li>
            <a href="/">Science</a>
          </li>
          <li>
            <a href="/">Professional</a>
          </li>
          <li>
            <a href="/">Business</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Data</a>
          </li>
        </ul>
      </FooterCol>
    </Container>
  );
};

export default FooterNav;
