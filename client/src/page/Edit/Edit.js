import styled from "styled-components";
import EditInput from "./EditInput";
import EditSideCard from "./EditSideCard";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: center;
  padding: 20px 120px;
  /* width: 100vw;
  height: 100vh; */
`;

const Edit = () => {
  return (
    <Container>
      <EditInput />
      <EditSideCard />
    </Container>
  );
};

export default Edit;
