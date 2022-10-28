import styled from "styled-components";
import { RiShareBoxLine } from "react-icons/ri";

/* const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
`; */

const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 78px;
  font-size: 13px;
  padding: 16px;
`;

/* const NavLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  :hover {
    color: #1e9dfe;
  }
`; */

const SignupInfo = () => {
  return (
    <BottomText>
      <div>{/* Already have an account? <NavLink to="/users/login">Log in</NavLink> */}</div>
      <div>
        Are you an employer? Sign up on Talent
        <RiShareBoxLine />
      </div>
    </BottomText>
  );
};

export default SignupInfo;
