import styled from "styled-components";

const SortedBox = styled.button`
  border-radius: 3px;
  width: ${(props) => props.width || "68.44px"};
  height: ${(props) => props.height || "33px"};
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  font-size: 13px;
  text-align: center;
  padding: ${(props) => props.padding || "8px 10.4px"};
  margin: ${(props) => props.margin || "none"};
  padding: 10px;
  color: rgb(82, 89, 96);
  background-color: rgb(248, 249, 249);
  border: 1px solid rgb(159, 166, 173);
  margin-left: -1px;
  font-size: 12px;
  cursor: pointer;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.background || "rgb(230, 230, 230)"};
  }
`;

const SortedTab = ({ text }) => {
  return <SortedBox>{text}</SortedBox>;
};

export default SortedTab;
