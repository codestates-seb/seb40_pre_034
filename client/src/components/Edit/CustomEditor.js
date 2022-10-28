import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.width || 700}px;
  height: ${(props) => props.height || 300}px;
`;

const CustomEditor = ({ width, height }) => {
  return <Container width={width} height={height}></Container>;
};

export default CustomEditor;
