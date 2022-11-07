import { CardStyle } from "../../components/SideCard/CardStyle";
import { YellowCardStyle } from "../../components/SideCard/YellowCard/YellowCardStyles";
import YellowCardTitle from "../../components/SideCard/YellowCard/YellowCardTitle";
import YellowCardContent from "../../components/SideCard/YellowCard/YellowCardContent";
import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Container = styled.div`
  margin-top: 70px;
`;
const InnerContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const Anchor = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-bottom: 10px;
  font-size: 13px;
`;
const EditSideCard = () => {
  return (
    <Container>
      <CardStyle width="350px">
        <YellowCardStyle>
          <YellowCardTitle text="How to Tag" />
          <YellowCardContent
            width="100%"
            text="A tag is a keyword or lavel that categorizes your question with other, similar questions. Choose one or more (up to 5) tags that will help answerers to find and interpret your question."
          />
          <InnerContent>
            <BsCircleFill size={5} />
            <YellowCardContent width="100%" text="complete th sentence : my question is about.." />
          </InnerContent>
          <InnerContent>
            <BsCircleFill size={5} />
            <YellowCardContent
              width="100%"
              text="use tags that describe things or concepts that are essential , not incidental to your question"
            />
          </InnerContent>
          <InnerContent>
            <BsCircleFill size={5} />
            <YellowCardContent width="100%" text="favor using existing popular tags" />
          </InnerContent>
          <InnerContent>
            <BsCircleFill size={5} />
            <YellowCardContent width="100%" text="read th descriptions that appear below th tag" />
          </InnerContent>
          <YellowCardContent
            width="100%"
            text=" if your question is primarily about a topic for which you can`t find a tag:"
          />
          <InnerContent>
            <BsCircleFill size={5} />
            <YellowCardContent
              width="100%"
              text="combine multiple words into single-words with hyphens(e.g. ruby-on-rails). up to a maximum of 35 characters"
            />
          </InnerContent>
          <InnerContent>
            <BsCircleFill size={5} />
            <YellowCardContent
              width="100%"
              text="creating new tags is a privilege; if you can`t yet create a tag you need, then post this question without it, then ask th community to create it for you"
            />
          </InnerContent>
          <Anchor href="/">
            popular tags
            <MdOutlineDoubleArrow />
          </Anchor>
        </YellowCardStyle>
      </CardStyle>
    </Container>
  );
};

export default EditSideCard;
