import React from "react";
import InputBox from "./components/Content/Input/InputBox";
import { TagsInput } from "./components/Content/Input/TagsInput";
import SearchBar from "./components/Content/Search/SearchBar";
import SignupInfo from "./components/Content/SignupInfo/SignupInfo";
import GlobalStyles from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <InputBox />
      <SearchBar />
      <TagsInput />
      <SignupInfo />
    </>
  );
}

export default App;
