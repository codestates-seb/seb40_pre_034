import styled from "styled-components";
import { Tag } from "./AskQuestion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #babfc4;
  border-radius: 3px;
  > ul {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  > input {
    flex-grow: 1;
    border: none;
    font-size: 14px;
    padding: 7px;
    :focus {
      outline: transparent;
    }
  }
  &:focus-within {
    outline: 1px solid #59a4de;
  }
`;

export const AskQTags = ({ tags, setTags }) => {
  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== "" && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <ul id="tags">
        {tags.map((el, index) => (
          <li key={index} className="tag">
            <Tag>{el}</Tag>
          </li>
        ))}
      </ul>
      <input
        type="text"
        id="tag"
        onKeyUp={(event) => (event.key === "Enter" || event.key === " " ? addTags(event) : null)}
        placeholder="e.g. (ajax objective-c r)"
      />
    </Container>
  );
};
