import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UseContexts } from "./store/Store";

const LoginForm = () => {
  const { isLoggedIn, login } = UseContexts();

  const handle = () => {
    if (isLoggedIn === false) {
      login();
    }

    console.log("clicked");
  };
  return (
    <div className="py-32 text-3xl text-red-500 cursor-default">
      <NavLink onClick={handle} to="/">
        click
      </NavLink>
    </div>
  );
};

export default LoginForm;
