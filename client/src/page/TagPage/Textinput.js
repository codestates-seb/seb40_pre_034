import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1px solid #babfc4;
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "200px")};
  resize: none;
  padding: 10px;
  &:focus {
    outline: 1px solid #59a4de;
  }
`;

const TextInput = styled.input.attrs({
  type: "text",
})`
  padding: 7px;
  border: 1px solid #babfc4;
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "100%")};
  &:focus {
    border-color: #0a95ff;
    outline: none;
  }
`;

export default TextInput;
