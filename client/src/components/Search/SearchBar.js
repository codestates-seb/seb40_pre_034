import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../redux/actions/searchAction";
import { BiSearchAlt2 } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "50%")};
  color: hsl(0, 0%, 100%);
  margin: ${(props) => (props.margin ? props.margin : "10px")};
  svg {
    position: absolute;
    margin-left: 10px;
  }
  input:focus {
    border-color: #0a95ff;
    outline: 4px solid hsl(206, 96%, 90%);
  }
  border-color: hsl(210, 8%, 75%);
  background-color: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 25%);
`;

const SearchInput = styled.input`
  border-radius: 3px;
  border: 1px solid #babfc4;
  background: #fff;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "32px")};
  padding-left: 35px;
  &::placeholder {
    color: #838c95;
  }
`;

const SearchBar = ({ width }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.target.value.length > 0 && e.key === "Enter") {
      dispatch(setKeyword(e.target.value));
      navigate("/search");
    }
  };

  return (
    <Container>
      <SearchInput type="text" width={width} placeholder="Search..." onKeyDown={handleSearch} />
      <BiSearchAlt2 />
    </Container>
  );
};

export default SearchBar;
