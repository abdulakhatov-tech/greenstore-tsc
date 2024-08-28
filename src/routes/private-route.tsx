import { useAppSelector } from "@hooks/useRedux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthed } = useAppSelector((state) => state.auth);

  return isAuthed ? (
    children
  ) : (
    <Navigate to="/" replace  />
  );
};

export default PrivateRoute;
