import styled from "styled-components";
import TagButton from "../Button/TagButton";

function TagInfo() {
  return (
    <Container>
      <div>
        <TagButton>javascript</TagButton>
      </div>
      <p>
        For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations
        (excluding ActionScript). Note
      </p>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  p {
    font-size: 13px;
  }
`;

export default TagInfo;
