import styled from 'styled-components';
import Char from '../../img/Char.png';

export const QuestionEl = styled.div`
  // 전체 틀 CSS
  border-top: solid 1px;
  border-top-color: gray;
  border-bottom: solid 1px;
  border-bottom-color: gray;
  padding: 9px;
  height: 120px;
  width: 771px;
  display: flex;
`;

export const LeftSection = styled.section`
  // 왼쪽 Section 넓이, 높이 조절
  width: 108px;
  height: 89px;
`;

export const RightSection = styled.section`
  // 오른쪽 Section 넓이, 높이 조절
  height: 89px;
  width: 645px;
  margin-left: 7px;
`;

export const LeftEl = styled.div`
  // 왼쪽 요소 (2 votes) css
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-size: 13px;
  padding: 5px;
`;

export const LeftEled = styled(LeftEl)`
  // 왼쪽 요소  (answers, 43views) css
  color: gray;
`;

export const RightEl = styled.h3`
  // 오른쪽 요소(제목) css
  color: #0074cc;
  font-size: 17px;
  text-align: left;
  line-height: 22px;
  padding: 3px;
`;

export const RightEled = styled.div`
  // 오른쪽 요소(내용) css
  font-size: 13px;
  line-height: 17px;
  text-align: left;
  color: #3b4045;
  padding: 3px;
`;

export const Footered = styled.footer`
  // 밑 영역  css
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  width: 645px;
  height: 23px;
  justify-content: space-between;
`;

export const LanguageBtn = styled.button`
  // 언어 버튼 css
  font-size: 12px;
  line-height: normal;
  text-align: center;
  color: #397393;
  padding: 3px;
  margin: 5px;
  cursor: hover;
`;

export const Register = styled.div`
  // 오른쪽 밑 영역 css
  float: right;
  padding: 3px;
  margin: 5px;
  display: flex;
`;

export const NickName = styled.div`
  // 닉네임 css
  font-size: 12px;
  line-height: 12px;
  text-align: left;
  letter-spacing: normal;
  color: #0074cc;
  display: flex;
  padding: 2px;
`;

export const QuestionTime = styled(NickName)`
  // 작성 시간 css
  color: #525960;
  display: flex;
`;

export const Ima = styled.div`
  // user이미지 css
  border-radius: 5px;
  background-size: 17px;
  background-image: url(${Char});
  width: 17px;
  height: 17px;
`;

const QuestionElement = () => {
  return (
    <div>
      <QuestionEl>
        <LeftSection>
          <LeftEl>2 votes</LeftEl>
          <LeftEled>answers</LeftEled>
          <LeftEled>43 views</LeftEled>
        </LeftSection>
        <RightSection>
          <RightEl>Is find_package(glog) not needed in cmake compiling?</RightEl>
          <RightEled>
            So I am in the middle of hosting a live wordpress site locally using XAMPP. The code is in a bitbucket repo
            and I have been given the database from the staging site to connect my local environment. ...
          </RightEled>
          <Footered>
            <LanguageBtn>java</LanguageBtn>
            <Register>
              <Ima />
              <NickName>jsdksad</NickName>
              <QuestionTime>asked 17hours ago</QuestionTime>
            </Register>
          </Footered>
        </RightSection>
      </QuestionEl>
    </div>
  );
};
export default QuestionElement;
