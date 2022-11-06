import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import BlueButton from "../../components/Button/BlueButton";
import WhiteButton from "../../components/Button/WhiteButton";
import { useState, useEffect } from "react";
import CustomEditor from "../../components/Edit/CustomEditor";
import axios from "axios";
import dompurify from "dompurify";
import AskQTags from "../AskQuestion/AskQTags";

const InputContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div``;

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
const EditorContainer = styled.div`
  width: 630px;
`;

const Display = styled.div`
  width: 630px;

  margin: 0.8rem 0;
`;

const TextContainer = styled.div`
  width: 630px;
  overflow: hidden;
  word-wrap: break-word;
`;
const TagContainer = styled.div`
  width: 630px;
`;

const ButtonContainer = styled.div`
  margin: 16px 0;
  width: 630px;
  & :first-child {
    margin-right: 10px;
  }
`;

const EditInput = () => {
  const sanitizer = dompurify.sanitize;
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [editorVal, setEditorVal] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      // .get(`${process.env.REACT_APP_API_URL}questions/` + id)
      .get("http://localhost:4002/questions/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setValue(res.data.content);
        setTags(res.data.tags);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const edit = {
      title: title,
      content: editorVal,
      tags: tags,
    };
    axios
      // eslint-disable-next-line no-undef
      .patch(/* `${process.env.REACT_APP_API_URL}questions/` */ `http://localhost:4002/questions/` + id, edit)
      .then(() => navigate(`/question/${id}`))
      .catch((err) => console.log(err));
  };
  const onClickHandler = () => {
    navigate(`/question/${id}`);
  };

  return (
    <InputContainer>
      <TitleContainer>
        <Title>Title</Title>
        <Input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
      </TitleContainer>
      <TextContainer>
        <Title>Body</Title>
        <EditorContainer>
          <CustomEditor handleValue={setEditorVal} value={value} />
          <Display dangerouslySetInnerHTML={{ __html: sanitizer(editorVal) }} />
        </EditorContainer>
      </TextContainer>
      <TagContainer>
        <Title>Tags</Title>
        <AskQTags tags={tags} setTags={setTags} />
      </TagContainer>
      <ButtonContainer>
        <BlueButton text="Save edits" handleSubmit={onSubmitHandler} />
        <WhiteButton text="Cancel" onClickHandler={onClickHandler} />
      </ButtonContainer>
    </InputContainer>
  );
};

export default EditInput;
