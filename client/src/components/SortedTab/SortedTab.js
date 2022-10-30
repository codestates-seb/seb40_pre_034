import styled from "styled-components";

const SortedTabStyle = styled.button`
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "68.44px")};
  height: ${(props) => (props.height ? props.height : "33px")};
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  font-size: 13px;
  text-align: center;
  padding: ${(props) => (props.padding ? props.padding : "10px")};
  margin: ${(props) => (props.margin ? props.margin : "none")};
  padding: 10px;
  color: rgb(82, 89, 96);
  background-color: rgb(248, 249, 249);
  border: 1px solid rgb(159, 166, 173);
  margin-left: -1px;
  font-size: 12px;
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:hover {
    background-color: ${(props) => (props.background ? props.background : "rgb(230, 230, 230)")};
  }
  cursor: pointer;
`;

const SortedTab = ({ text }) => {
  return <SortedTabStyle>{text}</SortedTabStyle>;
};

export default SortedTab;
