import styled from "styled-components";
import { RiShareBoxLine } from "react-icons/ri";

const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 78px;
  font-size: 13px;
  padding: 16px;
  span {
    color: #0074cc;
  }
`;
const BottomDescription = styled.div`
  margin-top: 2rem;
  font-size: 13px;
  color: #6a737c;
  span {
    color: #0074cc;
  }
`;

const SignupInfo = () => {
  return (
    <SignupSection>
      <BottomDescription>
        By clicking “Sign up”, you agree to our
        <span> terms of service, privacy policy</span> and
        <span> cookie policy</span>
      </BottomDescription>
      <BottomText>
        Already have an account? <span>Log in</span>
        <div>
          Are you an employer? Sign up on Talent
          <RiShareBoxLine />
        </div>
      </BottomText>
    </SignupSection>
  );
};

export default SignupInfo;
