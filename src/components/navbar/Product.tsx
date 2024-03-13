import { Navigate, Outlet } from "react-router-dom";
import { UseContexts } from "../store/Store";

const Product = () => {
  const { isLoggedIn } = UseContexts();
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/home" />;
};

export default Product;
