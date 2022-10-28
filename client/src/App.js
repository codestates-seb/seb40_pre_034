import SearchBar from "./components/Search/SearchBar";
import SignupInfo from "./components/SignupInfo/SignupInfo";
import GlobalStyles from "./style/GlobalStyle";
import InputBox from "./components/Input/InputBox";

function App() {
  return (
    <>
      <GlobalStyles />
      <InputBox />
      <SignupInfo />
      <SearchBar />
    </>
  );
}

export default App;
