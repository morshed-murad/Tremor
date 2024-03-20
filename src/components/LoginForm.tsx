import { NavLink } from "react-router-dom";
import { UseContexts } from "./store/Store";

const LoginForm = () => {
  const { isLoggedIn, login } = UseContexts();

  const handle = () => {
    login();
  };
  return (
    <div className="py-32 px-10 text-3xl text-red-500 cursor-default">
      <div className="nav">
        <NavLink to="/">Back</NavLink>
      </div>
      <div className="flex justify-center">
        {isLoggedIn === false ? (
          <NavLink to="/">
            <span onClick={handle}>click</span>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginForm;
