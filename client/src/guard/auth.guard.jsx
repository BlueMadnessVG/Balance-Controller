import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const authState = useSelector((store) => store.auth);
  return authState.token ? <Outlet /> : <Navigate replace to={"asdjhaskl"} />;
};

export default AuthGuard;
