import styled from "styled-components";

import { CardStyle } from "./CardStyle";

const WhiteCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-content: center;
  color: hsl(210, 8%, 35%);
  border-top: 1px solid hsl(210, 8%, 90%);
  border-bottom: 1px solid hsl(210, 8%, 90%);
  background-color: hsl(210, 8%, 97.5%);
  font-size: 1.15384615rem;
  font-weight: normal;
  padding: 12px 15px;
`;
const WhiteCard = ({ text }) => {
  return (
    <CardStyle>
      <WhiteCardTitle>{text}</WhiteCardTitle>
    </CardStyle>
  );
};

export default WhiteCard;

// 사용예시
// <CardStyle>
//  <WhiteCard text="Collectives" />
// </CardStyle>
