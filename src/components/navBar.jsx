/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ totalCounters }) => {
  return (
    <Navbar bg="light">
      <Navbar.Brand>
        Nav Bar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
