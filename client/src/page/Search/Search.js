import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";
import BlueButton from "../../components/Button/BlueButton";
import SortedTab from "../../components/SortedTab/SortedTab";
import QuestionsCount from "../../components/QuestionsCount/QuestionsCount";
import QuestionElement from "../../components/QuestionElement/QuestionElement";
import Pagination from "../../components/Pagination/Pagination";
import YellowCard from "../../components/SideCard/YellowCard/YCExample";
import WhiteCard from "../../components/SideCard/WhiteCard";
import SearchNotFound from "../../components/Search/SearchNotFound";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const MainContainer = styled.div`
  display: flex;
  margin-bottom: 100px;

  ul {
    list-style: none;
    padding: 0;
  }
`;

const SideDescription = styled.div``;

const QuestionContainer = styled.div`
  max-width: 900px;
  padding: 0 20px;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const QuestionOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-top: 30px;
`;

const QuestionSort = styled.div``;

const Questions = styled.ul`
  margin-bottom: 50px;
`;

const Search = () => {
  const navigate = useNavigate();
  /* const [sortTab, setSortTab] = useState("Newest"); */
  const [questions, setQuestions] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;
  const keyword = useSelector((state) => state.search);

  useEffect(() => {
    axios
      .get(/* `${process.env.REACT_APP_API_URL}search` */ "http://localhost:4000/questions", {
        params: {
          /* tab: sortTab, */
          /* keyword: keyword, */
          title: keyword,
        },
      })
      .then((res) => {
        setQuestions(res.data /* .data */);
      })
      .catch((err) => console.log(err));
  }, [keyword]);

  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <QuestionContainer>
          <QuestionHeader>
            <h1>Search Results</h1>
            <BlueButton text="Ask Question" onClick={() => navigate("/ask")} />
          </QuestionHeader>

          <QuestionOption>
            <QuestionsCount count={questions.length} text="results" />
            <QuestionSort>
              <SortedTab text="Newest" /* handleSortTab={setSortTab} */ />
              <SortedTab text="Popular" /* handleSortTab={setSortTab} */ />
            </QuestionSort>
          </QuestionOption>

          <Questions>
            {questions.length > 0 ? (
              questions.slice(offset, offset + limit).map((question) => {
                return (
                  <li key={question./* questionId */ id}>
                    <QuestionElement
                      id={question./* questionId */ id}
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
              })
            ) : (
              <SearchNotFound />
            )}
          </Questions>

          {questions.length > 0 && (
            <Pagination total={questions.length} limit={limit} page={page} setPage={setPage} setLimit={setLimit} />
          )}
        </QuestionContainer>

        <SideDescription>
          <YellowCard />
          <WhiteCard text="Custom Filters" />
          <WhiteCard text="Watched Tags" />
        </SideDescription>
      </MainContainer>
    </Container>
  );
};

export default Search;
