import styled from "styled-components";
import { ReactComponent as SidebarPicture } from "../../img/SidebarPicture.svg";
import { RiEarthLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-right: 50px;

  a {
    color: #525960;
  }
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
  text-align: center;
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
  div {
    margin-left: 5px;
  }
  &:hover {
    background-color: hsl(210, 8%, 90%);
    border-right: 3px solid #e98433;
  }
`;

export const CategoryListTags = styled(CategoryListQu)`
  padding-left: 24px;
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
              <Link to="/question">&nbsp; Questions</Link>
            </CategoryListQu>
            <CategoryListTags>
              <Link to="/question">Tags</Link>
            </CategoryListTags>
            <CategoryListUsers>
              <Link to="/question">Users</Link>
            </CategoryListUsers>
          </CategoryLists>
        </CategoryTemplate>
      </SidebarTemplate>
    </Container>
  );
};
export default Sidebar;
