import styled from "styled-components";
import { Tag } from "./AskQForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #babfc4;
  border-radius: 3px;
  > ul {
    display: flex;
    align-items: center;
    gap: 3px;
    list-style: none;
    padding-left: 5px;
  }
  > input {
    flex-grow: 1;
    border: none;
    font-size: 14px;
    padding: 10px;
    :focus {
      outline: transparent;
    }
  }
  &:focus-within {
    outline: 1px solid #59a4de;
  }
`;

const AskQTags = ({ tags, setTags }) => {
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== "" && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <ul id="tag">
        {tags &&
          tags.map((el, index) => (
            <li key={index} className="tag">
              <Tag>
                {el}
                <span role="presentation" className="tag-close-icon" onClick={() => removeTags(index)}>
                  &times;
                </span>
              </Tag>
            </li>
          ))}
      </ul>
      <input
        className="tag-input"
        type="text"
        id="tag"
        onKeyUp={(event) => (event.key === "Enter" || event.key === " " ? addTags(event) : null)}
        placeholder="e.g. (ajax objective-c r)"
      />
    </Container>
  );
};

export default AskQTags;
