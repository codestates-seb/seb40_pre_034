/* eslint-disable no-undef */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import VoteButton from "../../components/Button/VoteButton";
import BlueButton from "../../components/Button/BlueButton";
import TagButton from "../../components/Button/TagButton";
import CustomEditor from "../../components/Edit/CustomEditor";
import YellowSideCard from "../../components/SideCard/YellowCard/YellowSideCard";
import ShareLink from "../../components/ShareLink/ShareLink";
import axios from "axios";
import dompurify from "dompurify";
import jwt from "jwt-decode";

export const Container = styled.div`
  display: flex;

  justify-content: center;
`;

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: var(--black-025);
  box-shadow: 0px 1px 2px var(--black-100);
`;

export const MainSection = styled.main`
  position: relative;
  width: 100vw;
  display: flex;

  justify-content: center;
  padding-top: 50px;
`;

export const ContentSection = styled.div`
  position: relative;
  width: 100%;

  max-width: 1300px;
  overflow-x: hidden;
`;

export const ContentTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ContentTitle = styled.h1`
  flex-basis: 85%;
  font-size: 27px;
  font-weight: 600;
  color: var(--black-700);
  line-height: 36px;
`;

export const QuestionInfo = styled.section`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgb(227, 230, 232);
`;

export const QuestionAsked = styled.div`
  margin-bottom: 8px;
  margin-right: 16px;
  font-size: 13px;

  & > span {
    margin-right: 2px;
    color: gray;
  }

  & > strong {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const QuestionModified = styled(QuestionAsked)``;

export const QuestionViewed = styled(QuestionAsked)``;

export const QuestionContainer = styled.div`
  display: flex;
  width: 100%;

  .answersCount {
    margin-top: 10px;
  }
`;

export const QuestionContainerLeft = styled.section`
  width: 900px;
`;

export const QuestionContainerRight = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding-left: 20px;
`;

export const QuestionContainerLeftMain = styled.main`
  display: flex;
  margin-top: 16px;
  border-bottom: 1px solid rgb(227, 230, 232);
`;
export const QuestionContainerLeftMaind = styled(QuestionContainerLeftMain)``;

export const QuestionContainerLeftMainAside = styled.aside`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-right: 16px;
`;

export const QuestionContainerLeftMainIntroduce = styled.section`
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;

  & > div {
    font-size: 12px;
    color: gray;
    margin: 10px 0;
  }
  & > h1 {
    padding-bottom: 20px;
  }
`;

export const LanguageBtn = styled.section`
  display: flex;

  margin: 24px 0px;
`;

export const UseBtn = styled(LanguageBtn)`
  position: relative;
`;

export const UsedBtn = styled(UseBtn)``;

export const CustomerEditorArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 30px;
`;

export const AnswerArea = styled.div`
  h1 {
    margin-bottom: 10px;
  }
`;

export const EditorArea = styled.div`
  margin-top: 10px;
`;
export const IconArea = styled.div`
  float: right;
`;
export const QuestionBtn = styled.button`
  background-color: transparent;
  color: gray;
`;
export const AnswerBtn = styled.button`
  background-color: transparent;
  color: gray;
`;
export const QuestionDetailContent = styled.div`
  width: 700px;
  overflow: hidden;
`;
export const AnswerAnswer = styled.div``;
export const TagBtnArea = styled.div`
  > button {
    margin-right: 5px;
  }
`;
const QuestionBtn1 = styled(QuestionBtn)``;
const ShareLinkStyle = styled.div``;

const QuestionDetail = () => {
  const sanitizer = dompurify.sanitize;
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const questionId = useParams().id;
  const token = localStorage.getItem("accessToken");

  const [questionDetail, setQuestionDetail] = useState([]);
  const [editorVal, setEditiorVal] = useState(""); // 답변만 관리

  let memberId;

  if (token) {
    memberId = jwt(token.split(" ")[1]).memberId;
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}questions/` + questionId)
      .then((res) => setQuestionDetail(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}answers/` + questionId)
      .then((res) => {
        setAnswers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_URL}answers`,
        {
          memberId: memberId,
          questionId: questionId,
          answer_content: editorVal,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      )
      .then((res) => {
        setAnswers([...answers, res.data.data]);
        setEditiorVal("");
      });
  };

  const onQuestionDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}questions/delete/` + questionId, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => console.log(res.status))
      .then(() => navigate("/"));
  };

  const onAnswerDelete = (answerId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}answers/` + answerId, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(() => {
        const filteredAnswers = answers.filter((answer) => answer.answerId !== answerId);
        setAnswers(filteredAnswers);
      });
  };

  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <HeaderSection>
          <TopBar />
        </HeaderSection>
        <MainSection>
          <Sidebar />

          <ContentSection>
            <ContentTemplate>
              <ContentHeader>
                <ContentTitle>{questionDetail.title}</ContentTitle>

                <Link to="/ask">
                  <BlueButton text="Ask Question" width="120px" />
                </Link>
              </ContentHeader>
              <QuestionInfo>
                <QuestionAsked>
                  <span>Asked</span>
                  <strong>{questionDetail.createdAt}</strong>
                </QuestionAsked>
                <QuestionModified>
                  <span>Modified</span>
                  <strong>{questionDetail.modifiedAt}</strong>
                </QuestionModified>
                <QuestionViewed>
                  <span>Viewed</span>
                  <strong> {questionDetail.views}</strong>
                </QuestionViewed>
              </QuestionInfo>
              <QuestionContainer>
                <QuestionContainerLeft>
                  <QuestionContainerLeftMain>
                    <QuestionContainerLeftMainAside>
                      <VoteButton number="1" />
                    </QuestionContainerLeftMainAside>
                    <QuestionContainerLeftMainIntroduce>
                      <QuestionDetailContent dangerouslySetInnerHTML={{ __html: sanitizer(questionDetail.content) }} />
                      <LanguageBtn>
                        <TagBtnArea>
                          {questionDetail.tags &&
                            questionDetail.tags.map((tag, idx) => {
                              return <TagButton key={idx} text={tag} />;
                            })}
                        </TagBtnArea>
                      </LanguageBtn>
                      <UseBtn>
                        {isModal ? (
                          <>
                            <QuestionBtn1 onClick={ModalHandler}>Share</QuestionBtn1>
                            <ShareLinkStyle>
                              <ShareLink onClick={ModalHandler} />
                            </ShareLinkStyle>
                          </>
                        ) : (
                          <QuestionBtn1 onClick={ModalHandler}>Share</QuestionBtn1>
                        )}
                        <QuestionBtn onClick={() => navigate(`/edit/${questionId}`)}>Edit</QuestionBtn>
                        <QuestionBtn>Follow</QuestionBtn>
                        <QuestionBtn onClick={onQuestionDelete}>Delete</QuestionBtn>
                      </UseBtn>
                    </QuestionContainerLeftMainIntroduce>
                  </QuestionContainerLeftMain>
                  <h1 className="answersCount">{answers.length} Answers</h1>
                  {answers.length > 0 &&
                    answers.map((answer) => {
                      return (
                        <QuestionContainerLeftMaind key={answer.answerId}>
                          <QuestionContainerLeftMainAside>
                            <VoteButton number={answer.answer_vote} />
                          </QuestionContainerLeftMainAside>
                          <QuestionContainerLeftMainIntroduce>
                            <AnswerAnswer dangerouslySetInnerHTML={{ __html: sanitizer(answer.answer_content) }} />
                            <UsedBtn>
                              <AnswerBtn>Share</AnswerBtn>
                              <AnswerBtn>Edit</AnswerBtn>
                              <AnswerBtn onClick={() => onAnswerDelete(answer.answerId)}>Delete</AnswerBtn>
                            </UsedBtn>
                          </QuestionContainerLeftMainIntroduce>
                        </QuestionContainerLeftMaind>
                      );
                    })}
                  <CustomerEditorArea>
                    <AnswerArea>
                      <h1>Your Answer </h1>
                      <CustomEditor handleValue={setEditiorVal} />
                    </AnswerArea>
                    <EditorArea>
                      <BlueButton text="Post Your Answer" handleSubmit={onSubmitHandler} />
                    </EditorArea>
                  </CustomerEditorArea>
                </QuestionContainerLeft>
                <QuestionContainerRight>
                  <YellowSideCard />
                </QuestionContainerRight>
              </QuestionContainer>
            </ContentTemplate>
          </ContentSection>
        </MainSection>
      </Container>
    </>
  );
};
export default QuestionDetail;
