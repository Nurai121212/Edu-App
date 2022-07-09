import { Navigate } from "react-router-dom";

export default function GuestRoute({
  user, children, redirect = '/'}){
  if(user){
    <Navigate to={redirect} replace/>
  }

  return children;
}