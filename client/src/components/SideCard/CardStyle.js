import styled from "styled-components";

export const CardStyle = styled.div`
  width: ${(props) => (props.width ? props.width : "300px")};
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
  margin-bottom: 16px;
  border-radius: 6px;
`;
