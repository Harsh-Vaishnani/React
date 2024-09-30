import React from "react";

function Navbar() {
  return (
    <>
      <nav className=" bg-danger py-4">
        <ul className=" container d-flex list-inline text-white fs-5">
          <li>Home</li>
          <li className="px-5">About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
