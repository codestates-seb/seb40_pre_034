// 1. import 잘해주세요! 밑에있는거 다 필요합니다!(아이콘은 필요한 아이콘만 import하셔도 됩니다.)

import { CardStyle } from "../CardStyle";
import { YellowCardStyle, Pencil, Square, StackOverFlow } from "./YellowCardStyles";
import YellowCardTitle from "./YellowCardTitle";
import YellowCardContent from "./YellowCardContent";
import styled from "styled-components";

// 2. 아이콘이랑 글자 가운데 정렬이 너무 하고 싶어서 추가했습니다 ㅎㅎ,, 밑에 코드 그대로 가져가셔서 사용하시면 됩니다.
const InnerContent = styled.div`
  display: flex;
  align-items: center;
`;

// 3. 모든 경우의 수를 예시로 다 넣어 뒀습니다. 너무 많아서 이해가 잘 안되시면 말씀해주세요! 그냥 이부분은 제가 하겠습니다...(컴포넌트 재사용 쉽지않네요..ㅠㅠ)
const YCExample = () => {
  return (
    <>
      {/* 4. CardStyle, YellowCardStyle로 꼭 감싸주세요! */}
      <CardStyle>
        <YellowCardStyle>
          {/* 5. 순서: YellowCardTitle -> InnerContent ->(아이콘컴포넌트, YellowCardContent) */}
          <YellowCardTitle text="The Overflow Blog" />
          <InnerContent>
            <Pencil />
            <YellowCardContent text="Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS conference" />
          </InnerContent>
          <InnerContent>
            <Pencil />
            <YellowCardContent text="CEO update: Breaking down barriers to unlock innovation" />
          </InnerContent>

          <YellowCardTitle text="Featured on Meta" />
          <InnerContent>
            <Square />
            <YellowCardContent text="Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS conference" />
          </InnerContent>
          <InnerContent>
            <Square />
            <YellowCardContent text="Mobile app infrastructure being decommissioned" />
          </InnerContent>
          <InnerContent>
            <StackOverFlow />
            <YellowCardContent text="Staging Ground Workflow: Canned Comments" />
          </InnerContent>
          <InnerContent>
            <StackOverFlow />
            <YellowCardContent text="The Ask Wizard (2022) has graduated" />
          </InnerContent>
        </YellowCardStyle>
      </CardStyle>
    </>
  );
};

export default YCExample;
