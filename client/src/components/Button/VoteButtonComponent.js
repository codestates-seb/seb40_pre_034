import styled from "styled-components";

const VoteContainer = styled.div`
  display: flex;
  width: 40px;
  height: 120px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const VoteButtonStyle = styled.button`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  box-shadow: none;
  background: none;
`;

const SVG = styled.svg`
  position: absolute;
  top: 3px;
  left: 0;
  width: 36px;
  height: 36px;
`;

const Text = styled.div`
  font-size: 1.8rem;
  color: #6a737c;
`;
const PathColor = styled.path`
  fill: #6a737c;
  &:active {
    fill: #f48225;
  }
`;
const VoteButton = ({ number }) => {
  return (
    <VoteContainer>
      <VoteButtonStyle>
        <SVG>
          <PathColor d="M2 25h32L18 9 2 25Z"></PathColor>
        </SVG>
      </VoteButtonStyle>
      <Text>{number}</Text>
      <VoteButtonStyle>
        <SVG>
          <PathColor d="M2 11h32L18 27 2 11Z"></PathColor>
        </SVG>
      </VoteButtonStyle>
    </VoteContainer>
  );
};

export default VoteButton;

{
  /* 사용 예시 - (vote기능 구현한다고 하면 편한걸로 바꿔 사용하세요~)
  <VoteButton number="2" />
 */
}
