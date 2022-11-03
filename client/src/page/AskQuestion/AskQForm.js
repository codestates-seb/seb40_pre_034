import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f1f2f3;
  .question-box {
    width: 1264px;
    padding: 0 24px 24px 24px;
  }
  .title {
    line-height: 22%;
    position: relative;

    top: 60px;
    font-size: 28px;
    font-weight: 700;
    padding: 60px 0;
    background-image: url("https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368");
    background-position: right;
    background-repeat: no-repeat;
  }
`;

export const Tag = styled.div`
  color: ${(props) => props.color || "#39739d"};
  background-color: ${(props) => props.backgroundColor || "#e1ecf4"};
  padding: 5px;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
  display: inline;
  &:hover {
    background-color: ${(props) => props.backgroundColor || "#D0E3F1"};
  }
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  padding: 7px;
  border: 1px solid #babfc4;
  border-radius: 3px;
  width: ${(props) => props.width || "100%"};
  &:focus {
    outline: 1px solid #59a4de;
  }
`;

function AskQForm() {
  return (
    <Container>
      <div className="question-box">
        <div className="title">Ask a public question</div>
      </div>
    </Container>
  );
}

export default AskQForm;
