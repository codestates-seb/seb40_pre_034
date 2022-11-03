import styled from "styled-components";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import VoteButton from "../../components/Button/VoteButton";
import BlueButton from "../../components/Button/BlueButton";
import TagButton from "../../components/Button/TagButton";
import CustomEditor from "../../components/Edit/CustomEditor";
import YellowSideCard from "../../components/SideCard/YellowCard/YellowSideCard";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import dompurify from "dompurify";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
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
  z-index: 2;
`;

export const MainSection = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-top: 50px;
`;
export const SidebarSection = styled.div`
  position: sticky;
  row-gap: 20px;
  top: 50px;
  width: 190px;
  padding-top: 15px;
`;
export const ContentSection = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  overflow-x: hidden;
`;
export const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: var(--black-800);
`;

export const ContentTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
  border-left: 1px solid rgb(227, 230, 232);
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
  flex-grow: 1;
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;

  & > div {
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
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
  flex-wrap: wrap;
  margin: 24px 0px;
`;

export const UseBtn = styled(LanguageBtn)`
  & > button {
    background-color: transparent;
    color: gray;
  }
`;

export const CustomerEditorArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 30px;
`;

export const AnswerButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const AnswerArea = styled.div`
  & > h1 {
    padding: 10px;
  }
`;

export const EditorArea = styled.div`
  padding: 0px 20px;
`;
export const IconArea = styled.div`
  float: right;
`;

const QuestionDetail = () => {
  const [questionDetail, setQuestionDetail] = useState([]); // 답변만 관ㄹ
  const [answers, setAnswers] = useState([]);
  const [editorVal, setEditiorVal] = useState("");
  // const [questionDelete, setQuestionDelete] = useState("");
  // const [answerDelete, setAnswerDelete] = useState("");

  const sanitizer = dompurify.sanitize;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/questionTitle/1`)
      .then((res) => setQuestionDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/answers`)
      .then((res) => setAnswers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:4001/answers`, {
        answer: editorVal,
      })
      .then((res) => console.log(res.status))
      .then(() => (window.location.href = "http://localhost:3000/"));
  };

  // const onQuestionDelete = () => {
  //   axios
  //     .delete("http://localhost:4000/questionTitle/")
  //     .then((res) => console.log(res.status))
  //     .then(() => (window.location.href = "http://localhost:3000/"));
  // };

  const onAnswerDelete = (id) => {
    axios
      .delete("http://localhost:4001/answers/" + id)
      .then((res) => console.log(res.status))
      .then(() => (window.location.href = "http://localhost:3000/"));
  };

  return (
    <>
      <Container>
        <HeaderSection>
          <TopBar />
        </HeaderSection>
        <MainSection>
          <SidebarSection>
            <Sidebar />
          </SidebarSection>
          <ContentSection>
            <ContentTemplate>
              <ContentHeader>
                <ContentTitle>{questionDetail.title}</ContentTitle>
                {/* <IoClose size="24" onClick={() => onQuestionDelete()} /> */}
                {/* ask question 페이지로 이동 */}
                <IoClose size="24" />
                {/* <BlueButton text="Ask Question" width="120px" onClick = {} /> */}
                {/* ask question 페이지로 이동 */}
                <BlueButton text="Ask Question" width="120px" />
              </ContentHeader>
              <QuestionInfo>
                <QuestionAsked>
                  <span>Asked</span>
                  <strong>{questionDetail.asked} hours ago</strong>
                </QuestionAsked>
                <QuestionModified>
                  <span>Modified</span>
                  <strong>{questionDetail.modified} mins ago</strong>
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
                      <VoteButton />
                    </QuestionContainerLeftMainAside>
                    <QuestionContainerLeftMainIntroduce>
                      <h2>{questionDetail.content}</h2>
                      <LanguageBtn>
                        {questionDetail.tags &&
                          questionDetail.tags.map((tag, idx) => {
                            return <TagButton key={idx} text={tag} />;
                          })}
                        {/* <TagButton text={questionDetail.tags} /> */}
                      </LanguageBtn>
                      <UseBtn>
                        <button>Share</button>
                        <button>Edit</button>
                        <button>Follow</button>
                      </UseBtn>
                    </QuestionContainerLeftMainIntroduce>
                  </QuestionContainerLeftMain>

                  {answers.map((answer) => {
                    return (
                      <QuestionContainerLeftMaind key={answer.id}>
                        <QuestionContainerLeftMainAside>
                          <VoteButton />
                        </QuestionContainerLeftMainAside>
                        <QuestionContainerLeftMainIntroduce>
                          <IconArea>
                            <IoClose size="24" onClick={() => onAnswerDelete(answer.id)} />
                          </IconArea>

                          {answer.id === 1 ? <h1>{answers.length} Answers</h1> : ""}

                          <div dangerouslySetInnerHTML={{ __html: sanitizer(answer.answer) }} />
                          <LanguageBtn>
                            {answer.tags &&
                              answer.tags.map((tag, idx) => {
                                return <TagButton key={idx} text={tag} />;
                              })}
                          </LanguageBtn>
                          <UseBtn>
                            <button>Share</button>
                            <button>Edit</button>
                            <button>Follow</button>
                          </UseBtn>
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
                      <AnswerButton>
                        <BlueButton text="Post Your Answer" handleSubmit={onSubmitHandler} />
                      </AnswerButton>
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
        <FooterSection>
          <Footer />
        </FooterSection>
      </Container>
    </>
  );
};
export default QuestionDetail;
