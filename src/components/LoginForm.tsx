import { NavLink } from "react-router-dom";
import { UseContexts } from "./store/Store";

const LoginForm = () => {
  const { isLoggedIn, login } = UseContexts();

  const handle = () => {
    if (isLoggedIn === false) login();
  };
  return (
    <div className="py-32 text-3xl text-red-500 cursor-default">
      <NavLink to="/">
        <span onClick={handle}>click</span>
      </NavLink>
    </div>
  );
};

export default LoginForm;
