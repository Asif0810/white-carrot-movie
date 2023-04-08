import React from "react";
import logo from "../../asstes/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-300 justify-between">
      <div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} style={{ width: "50px" }} alt="" />
        </a>
        <b>White carrot</b>
      </div>
      <div>
        <Link className="mr-8" to={"/favorite"}>
          favorite list
        </Link>
        <button className="btn btn-outline btn-accent">Google</button>
      </div>
    </div>
  );
};

export default Navbar;
