import { Route, Routes } from "react-router-dom";

import Layout from "./page/Layout";
import TopBar from "./components/TopBar/TopBar";
import QuestionList from "./page/Question/QuestionList";
import TagPage from "./page/TagPage/TagPage";
import Search from "./page/Search/Search";
import QuestionDetail from "./page/Question/QuestionDetail";
import AskQuestion from "./page/AskQuestion/AskQuestion";
import Edit from "./page/Edit/Edit";
import Login from "./page/Login/Login";
import Signup from "./page/Signup/Signup";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<QuestionList></QuestionList>} />
          <Route path="/:id" element={<QuestionDetail></QuestionDetail>} />
          <Route path="/tags" element={<TagPage></TagPage>} />
          {/* <Route path="/users" element={<TagPage></TagPage>} /> */}
          <Route path="/search" element={<Search></Search>} />
          <Route path="/ask" element={<AskQuestion></AskQuestion>} />
          <Route path="/edit/:id" element={<Edit></Edit>} />
        </Route>
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </>
  );
}

export default App;
