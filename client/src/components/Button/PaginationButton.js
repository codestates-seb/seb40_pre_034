import styled from "styled-components";

export const PaginationButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  background-color: ${(props) => (props.checked ? "#F48225" : "hsl(0, 0%, 100%)")};
  color: hsl(210, 8%, 25%);
  border: calc(1px / 2) solid hsl(210, 8%, 85%);
  line-height: 0.5;
  box-shadow: none;
  &:hover {
    /* background-color: #d6d9dc; */
    background-color: ${(props) => (props.checked ? "#F48225" : "#d6d9dc")};
  }
`;
{
  /* * 1. width를 props로 내려주거나, 굳이 필요없으면 글씨 길이만큼 늘어납니다.
    2. 컴포넌트에 checked를 같이 넣어주면 선택된 버튼은 주황색으로 나옵니다.
    나중에 기능 구현하실 때 조건부 렌더링에 이용해보실 수 도 있을 것 같습니다.
    만약 잘 안되면 알려주세요. 두 버전으로 나누겠습니다.
    ex1)
    <PaginationButton>1</PaginationButton>
    <PaginationButton checked>1</PaginationButton>
    ex2)
    <PaginationButton>Prev</PaginationButton>
    <PaginationButton checked>next</PaginationButton> */
}
