import { Route, Routes } from "react-router-dom";

import Layout from "./page/Layout";
import LoginTopBar from "./components/TopBar/LoginTopBar";
import NotLoginTopBar from "./components/TopBar/NotLoginTopBar";
import QuestionList from "./page/Question/QuestionList";
import TagPage from "./page/TagPage/TagPage";
import Search from "./page/Search/Search";
import QuestionDetail from "./page/Question/QuestionDetail";
import AskQuestion from "./page/AskQuestion/AskQuestion";
import Edit from "./page/Edit/Edit";
import Login from "./page/Login/Login";
import Signup from "./page/Signup/Signup";
import Logout from "./page/Logout/Logout";
import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.withCredentials = true;
function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState(null);
  // const authHandler = () => {
  //   axios
  //     // eslint-disable-next-line no-undef
  //     .get(`${process.env.REACT_APP_API_URL}members/login`)
  //     .then((res) => {
  //       setIsLogin(true);
  //       setUserInfo(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   authHandler();
  // }, []);
  //2.
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const authHandler = () => {
    axios
      //     // eslint-disable-next-line no-undef
      .get("http://localhost:4000/users")
      .then((res) => {
        setIsLogin(true);
        console.log(res);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    authHandler();
  }, []);
  return (
    <>
      {isLogin ? (
        <LoginTopBar
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        ></LoginTopBar>
      ) : (
        <NotLoginTopBar />
      )}
      {/* <NotLoginTopBar /> */}
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
        <Route path="/login" element={<Login setIsLogin={setIsLogin} setUserInfo={setUserInfo}></Login>} />
        <Route path="/logout" element={<Logout setIsLogin={setIsLogin} setUserInfo={setUserInfo}></Logout>} />
      </Routes>
    </>
  );
}

export default App;
