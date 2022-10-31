import styled from "styled-components";
import TextInput from "../../page/TagPage/TextInput";

const Container = styled.div`
  width: 100%;
  p {
    width: 630px;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 16px;
  }
  h1 {
    font-size: 27px;
    margin-bottom: 24px;
  }
  .interface {
    display: flex;
    justify-content: space-between;
  }
  .filter {
    button {
      padding: 10px;
      color: rgb(82, 89, 96);
      background-color: rgb(248, 249, 249);
      border: 1px solid rgb(159, 166, 173);
      margin-left: -1px;
      font-size: 12px;

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      &:hover {
        background-color: ${(props) => (props.background ? props.background : "rgb(230, 230, 230)")};
      }
      cursor: pointer;
    }
  }
`;

function TagHeader() {
  return (
    <Container>
      <h1>Tags</h1>
      <p>
        A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags
        makes it easier for others to find and answer your question.
      </p>
      <div className="interface">
        <TextInput placeholder="Filter by tag name" width={"200px"} />
        <div className="filter">
          <button>Popular</button>
          <button>Name</button>
          <button>New</button>
        </div>
      </div>
    </Container>
  );
}

export default TagHeader;
