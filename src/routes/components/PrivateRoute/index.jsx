import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  user, children, redirect = '/login'}){
  if(!user){
    <Navigate to={redirect} replace/>
  }

  return children;
}