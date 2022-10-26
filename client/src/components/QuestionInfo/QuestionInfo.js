import styled from "styled-components";

const Container = styled.div`
  font-size: 1rem;

  span:first-child {
    margin-right: 4px;
    color: #6a737c;
  }

  span:nth-child(2) {
    color: #232629;
  }
`;

const QuestionInfo = ({ text, value }) => {
  return (
    <Container>
      <span>{text}</span>
      <span>{value}</span>
    </Container>
  );
};

export default QuestionInfo;
