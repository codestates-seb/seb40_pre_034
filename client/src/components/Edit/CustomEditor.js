import styled from "styled-components";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Container = styled.div`
  max-width: ${(props) => props.width || 700}px;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: ${(props) => props.height || 300}px;
  }
`;

const CustomEditor = ({ width, height, value = "", handleValue }) => {
  return (
    <Container width={width} height={height}>
      <CKEditor
        data={value}
        editor={ClassicEditor}
        onChange={(editor) => {
          const data = editor.getData();
          handleValue(data);
        }}
      />
    </Container>
  );
};

export default CustomEditor;

/* 
사용 설명 : 
- editor.getData()로 에디터 값을 가져오고 그 값을 state로 관리하기

화면 출력 예시 : 
- const sanitizer = dompurify.sanitize; => xss 방어를 위해 꼭 함께 사용해주기
- <div dangerouslySetInnerHTML={{ __html: sanitizer(data) }}></div> (자식 태그 없어야하므로 닫는 태그 사용)
*/
