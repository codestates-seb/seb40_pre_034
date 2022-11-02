import BlueButton from "../../components/Button/BlueButton";
import WhiteButton from "../../components/Button/WhiteButton";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CustomEditor from "../../components/Edit/CustomEditor";
import axios from "axios";
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
const Display = styled.div`
  width: 630px;
  margin: 0.6rem 0;
`;
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContainer = styled.div``;
const TagContainer = styled.div``;

const SummaryContainer = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 16px;
  width: 630px;
  & :first-child {
    margin-right: 10px;
  }
`;

const Edit = () => {
  const sanitizer = dompurify.sanitize;

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [editorVal, setEditorVal] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/questions/12")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const edit = {
      title: title,
      content: editorVal,
      tags: tag,
    };
    axios
      .patch("http://localhost:4000/questions/12", edit)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
    setTag(e.target.value);
  };

  return (
    <Container>
      <RevContainer>
        <Title>Rev</Title>
        <Input type="text" />
      </RevContainer>
      <TitleContainer>
        <Title>Title</Title>
        <Input type="text" defaultValue={setTitle ? value.title : null} onChange={onChangeHandler} />
      </TitleContainer>
      <TextContainer>
        <Title>Body</Title>
        <EditorContainer>
          <CustomEditor width="630" handleValue={setEditorVal} value={value.content} />
          <Display dangerouslySetInnerHTML={{ __html: sanitizer(editorVal) }} />
        </EditorContainer>
      </TextContainer>
      <TagContainer>
        <Title>Tags</Title>
        <Input type="text" defaultValue={setTag ? value.tag : null} />
      </TagContainer>
      <SummaryContainer>
        <Title>Summary</Title>
        <Input
          type="text"
          placeholder="briefly explain your change(corrected spelling, fixed grammar, improve formatting)"
        />
      </SummaryContainer>
      <ButtonContainer>
        <BlueButton text="Save edits" handleSubmit={onSubmitHandler} />
        <WhiteButton text="Cancel" />
      </ButtonContainer>
    </Container>
  );
};

export default Edit;
