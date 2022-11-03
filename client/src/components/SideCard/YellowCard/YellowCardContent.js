import styled from "styled-components";

const TextArea = styled.div`
  width: ${(props) => (props.width ? props.width : "230px")};
  margin: 12px 0;
  padding: 0 10px;
  color: hsl(210, 8%, 25%);
  font-size: 13px;
`;

const YellowCardContent = ({ text, width }) => {
  return <TextArea width={width}>{text}</TextArea>;
};

export default YellowCardContent;
