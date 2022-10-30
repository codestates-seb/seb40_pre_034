import styled from "styled-components";

import BlueButton from "../../components/Button/BlueButton";
import QuestionsCount from "../../components/QuestionsCount/QuestionsCount";
import QuestionElement from "../../components/QuestionElement/QuestionElement";

import dummyData from "./dummyData";

const Container = styled.div`
  padding: 20px;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }
`;

const QuestionOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const QuestionSort = styled.div``;

const Questions = styled.ul``;

const QuestionList = () => {
  return (
    <Container>
      <QuestionHeader>
        <h1>All Questions</h1>
        <BlueButton text="Ask Question" width="100px" />
      </QuestionHeader>

      <QuestionOption>
        {/* count 서버에서 받아와야함 */}
        <QuestionsCount count={10} text="questions" />
        <QuestionSort>{/* SortedTab 자리 */}</QuestionSort>
      </QuestionOption>

      <Questions>
        {dummyData.map((question, idx) => {
          return (
            <li key={idx}>
              <QuestionElement
                voteCnt={question.vote}
                answersCnt={question.answers}
                viewsCnt={question.views}
                title={question.title}
                content={question.content}
                tags={question.tags}
                nickname={question.nickname}
                createdAt={question.createdAt}
              />
            </li>
          );
        })}
      </Questions>
    </Container>
  );
};

export default QuestionList;
