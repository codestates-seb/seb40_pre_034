import styled from "styled-components";
// import { ReactComponent as SidebarPicture } from "../../img/SidebarPicture.svg";
import { RiEarthLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-top: 26px;
  border-right: 1px solid hsl(210, 8%, 85%);
  width: 164px;
`;

export const SidebarTemplate = styled.div``;

export const CategoryTemplate = styled.div``;

export const CategoryTitle = styled.div`
  color: hsl(210, 8%, 45%);
  font-size: 15px;
  margin: 5px 0;
`;

export const CategoryLists = styled.ul`
  font-size: 17px;
  padding: 0;
  list-style: none;
`;

export const CategoryList = styled.li`
  color: hsl(210, 8%, 35%);
  a {
    color: hsl(210, 8%, 35%);
  }
  a:hover {
    color: hsl(210, 8%, 5%);
  }
  & :hover {
    background-color: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
  }
`;

const ListStyle = styled.div`
  padding: 8px 0 8px 10px;
  display: flex;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: hsl(210, 8%, 95%);
    border-right: 3px solid hsl(27, 90%, 55%);
    color: hsl(210, 8%, 5%);
  }
  &:target {
    background-color: hsl(210, 8%, 95%);
    border-right: 3px solid hsl(27, 90%, 55%);
    color: hsl(210, 8%, 5%);
    font-weight: 800;
  }
  > .icon {
    margin-right: 10px;
  }
`;
const ListStyle2 = styled(ListStyle)`
  padding-left: 36px;
`;

const Sidebar = () => {
  return (
    <Container>
      <SidebarTemplate>
        <CategoryTemplate>
          <CategoryTitle>PUBLIC</CategoryTitle>
          <CategoryLists>
            <CategoryList>
              <ListStyle>
                <RiEarthLine size="16" className="icon" />
                <Link to="/">Questions</Link>
              </ListStyle>
            </CategoryList>
            <CategoryList>
              <ListStyle2>
                <Link to="/">Tags</Link>
              </ListStyle2>
            </CategoryList>
            <CategoryList>
              <ListStyle2>
                <Link to="/">Users</Link>
              </ListStyle2>
            </CategoryList>
          </CategoryLists>
        </CategoryTemplate>
      </SidebarTemplate>
    </Container>
  );
};
export default Sidebar;
