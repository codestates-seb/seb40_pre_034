import styled from "styled-components";
import TagHeader from "../../components/Tag/TagHeader";
import TagList from "../../components/Tag/TagList";

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
      <TagHeader />
      <TagList />
    </Container>
  );
}

export default TagPage;
