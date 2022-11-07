import styled from "styled-components";

const Container = styled.div`
  span:first-child {
    margin-right: 5px;
  }
`;

const QuestionsCount = ({ count, text }) => {
  return (
    <Container>
      <span>{count}</span>
      <span>{text}</span>
    </Container>
  );
};

export default QuestionsCount;
