import { CardStyle } from "../CardStyle";
import NumberIcon, { YellowCardStyle, Pencil, Square, StackOverFlow } from "./YellowCardStyles";
import YellowCardTitle from "./YellowCardTitle";
import YellowCardContent from "./YellowCardContent";
import styled from "styled-components";

const InnerContent = styled.div`
  display: flex;
  align-items: center;
`;

const YellowSideCard = () => {
  return (
    <>
      <CardStyle>
        <YellowCardStyle>
          <YellowCardTitle text="The Overflow Blog" />
          <InnerContent>
            <Pencil />
            <YellowCardContent text="Introducing the Ask Wizard: Your guide to crafting high-quality questions" />
          </InnerContent>
          <InnerContent>
            <Pencil />
            <YellowCardContent text="How to get more engineers entangled with quantum computing (Ep. 501)" />
          </InnerContent>

          <YellowCardTitle text="Featured on Meta" />
          <InnerContent>
            <Square />
            <YellowCardContent text="The 2022 Community-a-thon has begun!" />
          </InnerContent>
          <InnerContent>
            <Square />
            <YellowCardContent text="Mobile app infrastructure being decommissioned" />
          </InnerContent>
          <InnerContent>
            <StackOverFlow />
            <YellowCardContent text="The Ask Wizard (2022) has graduated" />
          </InnerContent>
          <InnerContent>
            <StackOverFlow />
            <YellowCardContent text="Staging Ground Workflow: Canned Comments" />
          </InnerContent>

          <YellowCardTitle text="Hot Meta Posts" />
          <InnerContent>
            <NumberIcon text="35" />
            <YellowCardContent text="Any plans to burninate [project-planning]?" />
          </InnerContent>
          <InnerContent>
            <NumberIcon text="17" />
            <YellowCardContent text="Don`t read th freaking [user-manual]" />
          </InnerContent>
        </YellowCardStyle>
      </CardStyle>
    </>
  );
};

export default YellowSideCard;
