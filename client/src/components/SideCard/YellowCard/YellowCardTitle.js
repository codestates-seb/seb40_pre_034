import styled from "styled-components";
const YellowCardTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-content: center;
  border-top: calc(1px / 2) solid hsl(47, 65%, 84%);
  border-bottom: calc(1px / 2) solid hsl(47, 65%, 84%);
  background-color: hsl(47, 65%, 84%);
  font-size: 13px;
  font-weight: 700;
  padding: 12px 15px;
`;
const YellowCardTitle = ({ text }) => {
  return (
    <>
      <YellowCardTitleStyle>{text}</YellowCardTitleStyle>
    </>
  );
};

export default YellowCardTitle;
