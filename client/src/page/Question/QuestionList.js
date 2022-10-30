import styled from "styled-components";

import BlueButton from "../../components/Button/BlueButton";
import LightBlueButtonWithIcon from "../../components/Button/LightBlueButtonWithIcon";
import SortedTabt from "../../components/SortedTab/SortedTab";
import QuestionsCount from "../../components/QuestionsCount/QuestionsCount";
import QuestionElement from "../../components/QuestionElement/QuestionElement";
import YellowCard from "../../components/SideCard/YellowCard/YCExample";
import WhiteCard from "../../components/SideCard/WhiteCard";

import dummyData from "./dummyData";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const SideDescription = styled.div``;

const QuestionContainer = styled.div`
  padding: 0 20px;
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
  align-items: center;
  margin-bottom: 15px;
  padding-top: 30px;
`;

const QuestionSort = styled.div`
  margin-right: 20px;
`;

const Questions = styled.ul``;

const ButtonContainer = styled.div`
  display: flex;
`;

const QuestionList = () => {
  return (
    <Container>
      <QuestionContainer>
        <QuestionHeader>
          <h1>All Questions</h1>
          <BlueButton text="Ask Question" />
        </QuestionHeader>

        <QuestionOption>
          {/* count 서버에서 받아와야함 */}
          <QuestionsCount count={10} text="questions" />
          <ButtonContainer>
            <QuestionSort>
              <SortedTabt text="Newest" />
              <SortedTabt text="Popular" />
            </QuestionSort>
            <LightBlueButtonWithIcon isFilter text="Filter" />
          </ButtonContainer>
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
      </QuestionContainer>
      <SideDescription>
        <YellowCard />
        <WhiteCard text="Custom Filters" />
        <WhiteCard text="Watched Tags" />
      </SideDescription>
    </Container>
  );
};

export default QuestionList;
