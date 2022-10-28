import styled from "styled-components";
import { BiFilter } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

const LightBlueButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border: 1px solid hsl(205, 47%, 42%);
  border-color: hsl(205, 41%, 63%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #b3d3ea;
  }
  &:active {
    background-color: hsl(205, 56%, 76%);
    border-color: hsl(205, 36%, 53%);
    box-shadow: none;
  }
`;

const InnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  margin-right: 5px;
  font-size: 20px;
`;

const LightBlueButtonWithIcon = ({ text, width, isFilter }) => {
  return (
    <LightBlueButtonStyle width={width}>
      <InnerText filter={isFilter}>
        <Icon>{isFilter ? <BiFilter /> : <AiFillEye />}</Icon>
        {text}
      </InnerText>
    </LightBlueButtonStyle>
  );
};

export default LightBlueButtonWithIcon;

{
  /* 사용 예시 
  1) filter 아이콘 사용하고 싶을 때 (filter인자로 안넣어주면 eye아이콘 나옴)
      <LightBlueButtonWithIcon isFilter text="filter" />

  2) eye 아이콘 사용하고 싶을 때 
  <LightBlueButtonWithIcon text="Watch a tag" />

  3.) 아이콘 안넣고 싶을 때 <LightBlueButton /> 

  그냥 아이콘 들어가는 거랑 안들어가는 버튼 컴포넌트를 나눴습니다...

 */
}
