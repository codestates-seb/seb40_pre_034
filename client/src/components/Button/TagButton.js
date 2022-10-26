import styled from "styled-components";

export const TagButton = styled.button`
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  line-height: 0;
  &:hover {
    background-color: #b3d3ea;
  }
`;
{
  /* * width조정 필요성을 잘 모르겠어서 따로 만들지 않았습니다. 
  다른 버튼컴포넌트처럼 크기 조절이 필요하면 알려주세요~ 추가하겠습니다.
ex1)
      <TagButton>javascript</TagButton>
      <TagButton>html</TagButton>*/
}
