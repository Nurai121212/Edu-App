import { Route, Routes } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { useEffect } from "react";
import Cookies from "js-cookie";
import users from "../store/Users";

import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";

export default observer(function AppRoutes(){
  useEffect(() => {
    const token = Cookies.get('my_token');

    token && users.getProfile(token)
  }, [])
  return(
    <Routes>
      <Route exact path="/" element={
        <PrivateRoute user={users.user}>
          <Home/>
        </PrivateRoute>
      }/>

      <Route path="/login" element={
        <GuestRoute user={users.user}>
          <Login/>
        </GuestRoute>
      }/>
    </Routes>
  )
})