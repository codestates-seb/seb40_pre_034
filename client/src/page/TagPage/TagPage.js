import styled from "styled-components";
import TagHeader from "./TagHeader";
import TagList from "./TagList";

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  padding: 7px;
  border: 1px solid #babfc4;
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "100%")};
  &:focus {
    border-color: #0a95ff;
    outline: 4px solid hsl(206, 96%, 90%);
  }
`;

function TagPage() {
  return (
    <Container>
      <TagHeader />
      <TagList />
    </Container>
  );
}

export default TagPage;
