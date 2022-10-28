import styled from "styled-components";

const TagButtonStyle = styled.button`
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  line-height: 0;
  &:hover {
    background-color: #b3d3ea;
  }
`;

const TagButton = ({ text }) => {
  return <TagButtonStyle>{text}</TagButtonStyle>;
};

export default TagButton;

{
  /* 사용 예시
  <TagButton text="javascript" />
  <TagButton text="html" />
 */
}
