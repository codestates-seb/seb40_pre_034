import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../../components/Button/BlueButton";
import AskQTags from "./AskQTags";
import CustomEditor from "../../components/Edit/CustomEditor";
import axios from "axios";
import AskQForm, { TextInput } from "./AskQForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f2f3;
  padding-top: 60px;

  .input_bgc {
    width: 1000px;
    display: flex;
    justify-content: center;
    padding: 16px;
    border-radius: 3px;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 50px;
    margin-top: 7px;
    background-color: #ffffff;
    padding: 10px;
    font-size: 13px;
  }

  label {
    font-size: 15px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    margin: 5px 0;
    font-weight: 400;
  }
  ul {
    list-style: none;
  }
`;

const Reviewbutton = styled.div`
  padding-bottom: 80px;
  background-color: #f1f2f3;
`;

function AskQuestion() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState([]);

  const onInput = (e) => {
    setTitle(e.target.value);
  };

  const postQuestions = async () => {
    try {
      await axios
        .post(
          // "http://localhost:4000/questions",
          // eslint-disable-next-line no-undef
          `${process.env.REACT_APP_API_URL}questions/ask`,
          {
            title: title,
            content: content,
            tags: tags,
          },
        )
        .then((res) => navigate(`/question/${res.data.id}`));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AskQForm />
      <div className="input_bgc">
        <div className="input_title">
          <label htmlFor="title">Title</label>
          <p>Be specific and imagine you’re asking a question to another person.</p>
          <TextInput
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            onChange={onInput}
          />
        </div>
        <div className="input_body">
          <label htmlFor="body">What are the details of your problem?</label>
          <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
          <CustomEditor type="text" width="700px" height="200px" handleValue={setContent} />
        </div>
        <div className="input_try">
          <label htmlFor="try">What did you try and what were you expecting?</label>
          <p>
            Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
          </p>
          <CustomEditor type="text" width="700px" height="200px" handleValue={setContent} />
        </div>
        <div className="input_tag">
          <label htmlFor="tag">Tags</label>
          <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
          <AskQTags tags={tags} setTags={setTags} />
        </div>
      </div>

      <Reviewbutton>
        <BlueButton text="Review your question" handleSubmit={postQuestions} />
      </Reviewbutton>
    </Container>
  );
}

export default AskQuestion;
