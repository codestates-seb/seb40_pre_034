import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { IoChatboxOutline, IoLogoStackoverflow } from "react-icons/io5";

// 이거 구현할꺼면 a태그로 바꾸기
export const YellowCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(47, 87%, 94%);
  border-left: calc(1px / 2) solid hsl(47, 65%, 84%);
  border-right: calc(1px / 2) solid hsl(47, 65%, 84%);
  border-bottom: calc(1px / 2) solid hsl(47, 65%, 84%);
`;

export const Pencil = styled(HiPencil)`
  margin-left: 16px;
  width: 16px;
  height: 16px;
`;

export const Square = styled(IoChatboxOutline)`
  margin-left: 16px;
  color: hsl(206, 85%, 57.5%);
  width: 16px;
  height: 16px;
`;

export const StackOverFlow = styled(IoLogoStackoverflow)`
  margin-left: 16px;
  width: 16px;
  height: 16px;
`;

const NumberIconStyle = styled.div`
  display: inline-block;
  font-size: 13px;
  margin-left: 16px;
  color: hsl(210, 8%, 45%);
  width: 16px;
  height: 16px;
`;
const NumberIcon = ({ text }) => {
  return <NumberIconStyle>{text}</NumberIconStyle>;
};
export default NumberIcon;
