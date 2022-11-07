import ClipLoader from "react-spinners/ClipLoader";
// import { useState, useEffect } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Loading = () => {
  return (
    <Container>
      <ClipLoader color={"#f48225"} size={100} />
    </Container>
  );
};
export default Loading;
