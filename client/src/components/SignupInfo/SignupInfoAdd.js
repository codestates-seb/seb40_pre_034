import styled from "styled-components";
import { Link } from "react-router-dom";

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

const SingupInfoAdd = () => {
  return (
    <InfoContainer>
      <Info>
        <span>Don`t have an account?</span>
        <Link to="/signup">Sign up</Link>
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
  );
};

export default SingupInfoAdd;
