import styled from "styled-components";

const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
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
    </SignupSection>
  );
};

export default SignupInfo;
