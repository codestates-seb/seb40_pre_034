import styled from "styled-components";

export const Tag = styled.a`
  color: ${(props) => props.color || "#39739d"};
  background-color: ${(props) => props.backgroundColor || "#e1ecf4"};
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background-color: ${(props) => props.backgroundColor || "#D0E3F1"};
  }
`;
