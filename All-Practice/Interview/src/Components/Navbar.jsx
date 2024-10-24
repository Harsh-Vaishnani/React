import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
