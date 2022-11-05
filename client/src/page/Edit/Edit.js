import styled from "styled-components";
import EditInput from "./EditInput";
import EditSideCard from "./EditSideCard";

//이미지는 ? 어떻게 처리하지????

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: center;
  padding: 0 120px;
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
