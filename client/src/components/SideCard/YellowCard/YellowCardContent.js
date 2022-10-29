import styled from "styled-components";

const TextArea = styled.div`
  width: 230px;
  margin: 12px 0;
  padding-left: 10px;
  color: hsl(210, 8%, 25%);
  font-size: 13px;
`;

const YellowCardContent = ({ text }) => {
  return <TextArea>{text}</TextArea>;
};

export default YellowCardContent;
