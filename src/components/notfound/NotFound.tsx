import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="py-32 px-10">
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga facere
        ducimus voluptas dignissimos earum perspiciatis repudiandae numquam?
        Deleniti ut alias animi cumque voluptatum iusto esse ipsa veniam
        dignissimos asperiores?
        <br />
        <span>
          click the
          <NavLink to="/">
            <span className="font-bold">Back</span>
          </NavLink>
          to home Page
        </span>
      </p>
    </div>
  );
};

export default NotFound;
