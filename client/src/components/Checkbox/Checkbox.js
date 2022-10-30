import styled from "styled-components";

const CheckboxStyle = styled.div`
  width: 300px;
`;

const FormStyle = styled.form`
  display: flex;
  padding-right: 20px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
`;

const InputStyle = styled.input`
  margin: 0;
  width: 1em;
  height: 1em;
  border: 1px solid hsl(210, 8%, 75%);
  background-color: hsl(0, 0%, 100%);
  outline: 0;
  border-radius: 3px;
  cursor: pointer;
  & :focus {
    border-color: hsl(205, 47%, 42%);
    outline: 4px solid hsl(205, 41%, 63%);
  }
`;

const TextArea = styled.div`
  padding: 0 10px;
  width: 100%;
`;
const Checkbox = ({ text }) => {
  return (
    <CheckboxStyle>
      <FormStyle>
        <InputStyle type="checkbox" />
        <TextArea>{text}</TextArea>
      </FormStyle>
    </CheckboxStyle>
  );
};

export default Checkbox;
