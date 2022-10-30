import styled from "styled-components";

const Container = styled.div`
  font-size: 1rem;
  display: flex;
`;

const Option = styled.div`
  margin-right: 20px;

  span {
    margin-right: 4px;
  }

  span:first-child {
    color: #6a737c;
  }

  span:nth-child(2) {
    color: #232629;
  }
`;

const QuestionInfo = ({ AskedCount, ModifiedCount, ViewedCount }) => {
  return (
    <Container>
      <Option>
        <span>Asked</span>
        <span>{AskedCount}</span>
      </Option>
      <Option>
        <span>Modified</span>
        <span>{ModifiedCount}</span>
      </Option>
      <Option>
        <span>Viewed</span>
        <span>{ViewedCount}</span>
      </Option>
    </Container>
  );
};

export default QuestionInfo;
