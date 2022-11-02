import styled from "styled-components";
import { useState } from "react";
import BlueButton from "../../components/Button/BlueButton";
import AskQTags from "./AskQTags";
import CustomEditor from "../../components/Edit/CustomEditor";
import axios from "axios";
import AskQForm, { TextInput } from "./AskQForm";

const Container = styled.div`
  flex-grow: 1;
  .input_bgc {
    padding: 16px;
    border-radius: 3px;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
  }
  label {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    > P {
      font-size: 12px;
      margin: 5px 0;
      font-weight: 400;
    }
  }
  button {
    margin-top: 32px;
    padding: 10px;
    font-size: 13px;
    background-color: #0074cc;
    border: 1px solid #ffffff;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

function AskQuestion() {
  const initialTags = [];
  const [tags, setTags] = useState(initialTags);
  console.log(tags);

  const [title, setTitle] = useState();
  console.log(title);

  const onInput = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const postQuestions = async () => {
    try {
      const res = await axios.post(
        "http://ec2-54-180-153-246.ap-northeast-2.compute.amazonaws.com:8080/questions/ask",
        {
          title: title,
          tags: tags,
        },
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AskQForm />
      <div className="question-box">
        <div></div>
      </div>
      <div className="input_bgc">
        <div className="input_title">
          <label htmlFor="title">
            Title
            <p>Be specific and imagine you’re asking a question to another person.</p>
          </label>
          <TextInput
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            onChange={onInput}
          />
        </div>
        <div className="input_body">
          <label htmlFor="body">
            What are the details of your problem?
            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
            <CustomEditor type="text" width="700px" height="300px" handleValue={setTitle} />
          </label>
        </div>
        <div className="input_try">
          <label htmlFor="try">
            What did you try and what were you expecting?
            <p>
              Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
            </p>
            <CustomEditor type="text" width="700px" height="300p" handleValue={setTitle} />
          </label>
        </div>
        <div className="input_tag">
          <label htmlFor="tag">
            Tags
            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
          </label>
          <AskQTags tags={tags} setTags={setTags} />
        </div>
      </div>
      <BlueButton
        // type="button"
        text="Review your question"
        handleSubmit={postQuestions}
      />
    </Container>
  );
}

export default AskQuestion;
