import BlueButton from "../../components/Button/BlueButton";
import WhiteButton from "../../components/Button/WhiteButton";
import styled from "styled-components";
// import { useState } from "react";
import CustomEditor from "../../components/Edit/CustomEditor";
import dompurify from "dompurify";

const Container = styled.div`
  margin-top: 70px;
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const RevContainer = styled.div``;

const TitleContainer = styled.div`
  /* display: flex; */
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.4rem 0;
`;

const Input = styled.input`
  width: 630px;
  padding: 8px 10px;
  margin-bottom: 10px;
  height: 35px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  &:focus {
    border-color: #0a95ff;
    outline: none;
  }
`;

const TextContainer = styled.div``;

const TagContainer = styled.div``;

const SummaryContainer = styled.div``;

const ButtonContainer = styled.div``;
const Edit = () => {
  const sanitizer = dompurify.sanitize;

  //   const [title, setTitle] = useState("");
  //   const [text,setText] = useState('')
  //   const [tag,setTag] = useState('')

  return (
    <Container>
      <RevContainer>
        <Title>Rev</Title>
        <Input type="text" />
      </RevContainer>
      <TitleContainer>
        <Title>Title</Title>
        <Input type="text" />
        {/* <Input type="text" value={title} /> */}
      </TitleContainer>
      <TextContainer>
        <Title>Body</Title>
        {/* edit 라이이브러리 불러오기 */}
        <CustomEditor width="650" value="sges" />
        <div dangerouslySetInnerHTML={{ __html: sanitizer("<div></div>") }}></div>
        {/* 라이브러리 내용 나오게 하기 */}
      </TextContainer>
      <TagContainer>
        <Title>Tags</Title>
        <Input type="text" />
      </TagContainer>
      <SummaryContainer>
        <Title>Summary</Title>
        <Input
          type="text"
          placeholder="briefly explain your change(corrected spelling, fixed grammar, improve formatting)"
        />
      </SummaryContainer>
      <ButtonContainer>
        <BlueButton text="Save edits" />
        <WhiteButton text="Cancel" />
      </ButtonContainer>
    </Container>
  );
};

export default Edit;
