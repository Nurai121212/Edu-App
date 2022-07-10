import { Route, Routes, Navigate} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { useEffect } from "react";
import Cookies from "js-cookie";
import users from "./store/Users";

import Home from "./pages/Home";
import Login from "./pages/Login";

export default observer(function App() {
  useEffect(() => {
    const token = Cookies.get('my_token');

    if(token){
      users.getProfile(token)
    }
  }, [])

  return(
    <Routes>
    <Route exact path="/" element={
      users.user ? <Home/> : <Navigate to={'/login'}/>
    }/>

    <Route path="/login" element={
      !users.user ? <Login/> : <Navigate to={'/'}/>
    }/>
  </Routes>
  )
})
