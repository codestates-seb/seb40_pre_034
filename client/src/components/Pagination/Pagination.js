import styled from "styled-components";

// import PaginationButton from "../Button/PaginationButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 4px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 4px;

  p {
    font-size: 12px;
  }
`;

const PaginationButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  background-color: ${(props) => (props.checked ? "#F48225" : "hsl(0, 0%, 100%)")};
  color: hsl(210, 8%, 25%);
  border: calc(1px / 2) solid hsl(210, 8%, 85%);
  line-height: 0.5;
  box-shadow: none;
  &:hover {
    background-color: ${(props) => (props.checked ? "#F48225" : "#d6d9dc")};
  }
`;

const Pagination = ({ total, limit, page, setPage, setLimit }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <Container>
      <Nav>
        <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </PaginationButton>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <PaginationButton key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </PaginationButton>
          ))}
        <PaginationButton onClick={() => setPage(page + 1)} disabled={page === numPages}>
          Next
        </PaginationButton>
      </Nav>
      <Buttons>
        <PaginationButton onClick={() => setLimit(15)}>15</PaginationButton>
        <PaginationButton onClick={() => setLimit(30)}>30</PaginationButton>
        <PaginationButton onClick={() => setLimit(50)}>50</PaginationButton>
        <p>per page</p>
      </Buttons>
    </Container>
  );
};

export default Pagination;
