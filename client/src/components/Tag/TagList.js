import styled from "styled-components";
import TagInfo from "./TagInfo";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  gap: 12px;
`;

function TagList() {
  const users = [];

  for (let i = 0; i < 22; i++) {
    users.push("1");
  }

  return (
    <Container>
      {users.map((_, idx) => {
        return <TagInfo key={idx} />;
      })}
    </Container>
  );
}

export default TagList;
