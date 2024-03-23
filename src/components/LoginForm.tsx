import { NavLink } from "react-router-dom";
import { UseContexts } from "./store/Store";
import Buttons from "./button/Buttons";

const LoginForm = () => {
  const { isLoggedIn, login } = UseContexts();

  const handle = () => {
    login();
  };
  return (
    <div className="py-32 px-10 text-3xl text-red-500 cursor-default">
      <div>
        {isLoggedIn === false ? (
          <div>
            <div className="nav">
              <NavLink to="/">Back</NavLink>
            </div>
            <div className="flex justify-center">
              <NavLink to="/">
                <Buttons onClick={handle} children="Click" />
              </NavLink>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginForm;

