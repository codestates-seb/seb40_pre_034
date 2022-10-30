import styled from "styled-components";
import TagButton from "../../components/Button/TagButton";
import TagList from "../../components/Tag/TagList";
import TagMain from "../../components/Tag/TagMain";

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function TagPage() {
  return (
    <Container>
      <TagMain />
      <TagButton text="javascript" />
      <TagButton text="html" />
      <TagList />
    </Container>
  );
}

export default TagPage;
