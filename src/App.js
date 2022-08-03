import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth.js";
import UserProfile from './components/UserProfile.js'
import { useSelector } from "react-redux";
// import { Fragment } from "react";

function App(){

  const isAuth=useSelector((state)=>state.Auth.isAuthenticated);

  return (
    <>
      <Header />
      {isAuth&&<UserProfile/>}
      {!isAuth&&<Auth />}
      <Counter />;
    </>
  );
}

export default App;
