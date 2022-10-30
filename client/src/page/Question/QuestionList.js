import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import BlueButton from "../../components/Button/BlueButton";
import LightBlueButtonWithIcon from "../../components/Button/LightBlueButtonWithIcon";
import SortedTab from "../../components/SortedTab/SortedTab";
import QuestionsCount from "../../components/QuestionsCount/QuestionsCount";
// import QuestionElement from "../../components/QuestionElement/QuestionElement";
import Pagination from "../../components/Pagination/Pagination";
import YellowCard from "../../components/SideCard/YellowCard/YCExample";
import WhiteCard from "../../components/SideCard/WhiteCard";

// import dummyData from "./dummyData";

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
  const [questions, setQuestions] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;

  // const [sortTab, setSortTab] = useState("Newest");

  useEffect(() => {
    /*axios
      .get("URL", { params: { tab: sortTab } })
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []); */

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  /* 
  정렬탭 바뀔 때마다 상태 관리되도록 수정
  const changeSortTab = () => {
    setSortTab();
  }; */

  return (
    <Container>
      <QuestionContainer>
        <QuestionHeader>
          <h1>All Questions</h1>
          <BlueButton text="Ask Question" />
        </QuestionHeader>

        <QuestionOption>
          <QuestionsCount count={questions.length} text="questions" />
          <ButtonContainer>
            <QuestionSort>
              <SortedTab text="Newest" />
              <SortedTab text="Popular" />
            </QuestionSort>
            <LightBlueButtonWithIcon isFilter="true" text="Filter" />
          </ButtonContainer>
        </QuestionOption>

        <Questions>
          {/* {dummyData.map((question, idx) => {
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
          })} */}
          {questions.slice(offset, offset + limit).map(({ id, title, body }) => (
            <article key={id}>
              <h3>
                {id}. {title}
              </h3>
              <p>{body}</p>
            </article>
          ))}
        </Questions>

        <Pagination total={questions.length} limit={limit} page={page} setPage={setPage} setLimit={setLimit} />
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
