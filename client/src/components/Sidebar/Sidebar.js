import styled from "styled-components";
import { ReactComponent as SidebarPicture } from "../../img/SidebarPicture.svg";
import { RiEarthLine } from "react-icons/ri";

export const Container = styled.div`
  width: 190px;
`;

export const SidebarTemplate = styled.div`
  height: 500px;
`;

export const CategoryTemplate = styled.div`
  height: 200px;
  padding-top: 10px;
`;

export const CategoryTitle = styled.div`
  height: 25px;
  text-align: left;
  padding-top: 3px;
  color: #b4b4b4;
`;

export const CategoryLists = styled.ul`
  height: 155px;
`;

export const CategoryListQu = styled.li`
  display: flex;
  align-items: center;
  color: #6a737c;
  height: 50px;
  &:hover {
    background-color: #c8c8c8;
  }
`;

export const CategoryListTags = styled(CategoryListQu)`
  padding-left: 16px;
`;

export const CategoryListUsers = styled(CategoryListTags)``;

export const Introduce = styled.div`
  height: 300px;
`;

export const IntroudceTitle = styled.div`
  height: 40px;
  padding-top: 10px;
  text-align: left;
`;

export const IntroduceContent = styled(IntroudceTitle)`
  .SidebarPicture {
    width: 160px;
    height: 160px;
    box-sizing: border-box;
    background-image: url(${SidebarPicture});
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <SidebarTemplate>
        <CategoryTemplate>
          <CategoryTitle>PUBLIC</CategoryTitle>
          <CategoryLists>
            <CategoryListQu>
              <RiEarthLine />
              Questions
            </CategoryListQu>
            <CategoryListTags>Tags</CategoryListTags>
            <CategoryListUsers>Users</CategoryListUsers>
          </CategoryLists>
          <Introduce>
            <IntroudceTitle>Stack Overflow for Teams</IntroudceTitle>
            <IntroduceContent>
              -Start collaborating and sharing organizational knowledge
              <SidebarPicture />
            </IntroduceContent>
          </Introduce>
        </CategoryTemplate>
      </SidebarTemplate>
    </Container>
  );
};
export default Sidebar;
