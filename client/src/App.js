import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Loading from "./components/Loading/Loading";
import LoginTopBar from "./components/TopBar/LoginTopBar";
import NotLoginTopBar from "./components/TopBar/NotLoginTopBar";
const Layout = lazy(() => import("./page/Layout"));
const QuestionList = lazy(() => import("./page/Question/QuestionList"));
const Search = lazy(() => import("./page/Search/Search"));
const QuestionDetail = lazy(() => import("./page/Question/QuestionDetail"));
const AskQuestion = lazy(() => import("./page/AskQuestion/AskQuestion"));
const Edit = lazy(() => import("./page/Edit/Edit"));
const Login = lazy(() => import("./page/Login/Login"));
const Signup = lazy(() => import("./page/Signup/Signup"));
const Logout = lazy(() => import("./page/Logout/Logout"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

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

      // eslint-disable-next-line no-undef
      .get(`${process.env.REACT_APP_API_URL}members/login`)
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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<QuestionList />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/ask" element={<AskQuestion />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} setUserInfo={setUserInfo} />} />
          <Route path="/logout" element={<Logout setIsLogin={setIsLogin} setUserInfo={setUserInfo} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
