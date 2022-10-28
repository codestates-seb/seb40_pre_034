import SignupInfo from "./components/SignupInfo/SignupInfo";
import GlobalStyles from "./style/GlobalStyle";
import SearchBar from "./components/Search/SearchBar";
import SortedTab from "./components/SortedTab/SortedTab";

function App() {
  return (
    <>
      <GlobalStyles />
      <SignupInfo />
      <SearchBar />
      <SortedTab />
    </>
  );
}

export default App;
