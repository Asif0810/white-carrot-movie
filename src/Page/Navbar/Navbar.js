import React, { useContext } from "react";
import logo from "../../asstes/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../../AuthContext/AuthContext";
const Navbar = () => {
  const { user, google } = useContext(Context);
  const googleHandler = () => {
    google()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(console.error());
  };
  return (
    <div className="navbar bg-base-300 justify-between">
      <div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} style={{ width: "50px" }} alt="" />
        </a>
        <b>{user?.email}</b>
      </div>
      <div>
        <Link className="mr-8" to={"/favorite"}>
          favorite list
        </Link>
        <button onClick={googleHandler} className="btn btn-outline btn-accent">
          Google
        </button>
      </div>
    </div>
  );
};

export default Navbar;
