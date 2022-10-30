import styled from "styled-components";
import Char from "../../img/Char.png";

import TagButton from "../Button/TagButton";

const Container = styled.div`
  // 전체 틀 CSS
  display: flex;
  align-items: start;
  border-top: solid 1px #babfc4;
  padding: 15px 50px;
`;

const QuestionOption = styled.section`
  // 왼쪽 Section 넓이, 높이 조절
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 2px;
  width: 5%;

  & > div {
    font-size: 13px;
    margin-bottom: 10px;
  }

  & > div:not(div:first-child) {
    color: gray;
  }
`;

const QuestionMain = styled.section`
  // 오른쪽 Section 넓이, 높이 조절
  margin-left: 15px;
  width: 95%;
`;

const QuestionCotent = styled.div`
  text-align: left;
  margin-bottom: 10px;

  h3 {
    font-size: 17px;
    margin-bottom: 10px;

    a {
      color: #0074cc;
    }
  }

  & > p {
    font-size: 14px;
    color: #3b4045;
  }
`;

const Tags = styled.ul`
  display: flex;

  button {
    margin-right: 4px;
  }
`;

const QuestionInfo = styled.div`
  // 밑 영역  css
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Register = styled.div`
  // 오른쪽 밑 영역 css
  display: flex;
  justify-content: space-around;
  font-size: 12px;

  .nickname {
    color: #0074cc;
    margin-right: 7px;
  }

  .createdAt {
    color: #525960;
  }
`;

const Ima = styled.div`
  // user이미지 css
  border-radius: 5px;
  background-size: 17px;
  background-image: url(${Char});
  width: 17px;
  height: 17px;
  margin-right: 7px;
`;

const QuestionElement = ({ voteCnt, answersCnt, viewsCnt, title, content, tags, nickname, createdAt }) => {
  return (
    <Container>
      <QuestionOption>
        <div>{voteCnt} votes</div>
        <div>{answersCnt} answers</div>
        <div>{viewsCnt} views</div>
      </QuestionOption>
      <QuestionMain>
        <QuestionCotent>
          <h3>
            <a href="/">{title}</a>
          </h3>
          <p>{content}</p>
        </QuestionCotent>

        <QuestionInfo>
          <Tags>
            {tags.map((tag, idx) => {
              return (
                <li key={idx}>
                  <TagButton text={tag} />
                </li>
              );
            })}
          </Tags>
          <Register>
            <Ima />
            <span className="nickname">{nickname}</span>
            <span className="createdAt">asked {createdAt}</span>
          </Register>
        </QuestionInfo>
      </QuestionMain>
    </Container>
  );
};

export default QuestionElement;
