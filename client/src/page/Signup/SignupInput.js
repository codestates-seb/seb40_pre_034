import styled from "styled-components";

import InputBox from "../../components/Input/InputBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: #de4f54 !important;
`;

const SignupInput = ({ title, type = "text", value, handleValue, errorMsg }) => {
  return (
    <Container>
      <div>{title}</div>
      <InputBox type={type} value={value} handleValue={handleValue} />
      <ErrorMessage>{errorMsg}</ErrorMessage>
    </Container>
  );
};

export default SignupInput;
