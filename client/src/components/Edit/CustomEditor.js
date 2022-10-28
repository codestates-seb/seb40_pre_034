import styled from "styled-components";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const Container = styled.div`
  max-width: ${(props) => props.width || 700}px;
  height: ${(props) => props.height || 300}px;
`;

const CustomEditor = ({ width, height, value = " " }) => {
  return (
    <Container width={width} height={height}>
      <Editor
        initialValue={value}
        initialEditType="markdown"
        hideModeSwitch="true"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
      />
    </Container>
  );
};

export default CustomEditor;
