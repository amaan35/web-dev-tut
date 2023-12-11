import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
    };
  };

  return (
    <>
      <div className="header">
        <NavLink style={navLinkStyles} to={"/"}>
          <h1 className="nav">Home</h1>
        </NavLink>
        <NavLink style={navLinkStyles} to={"/about"}>
          <h1 className="nav">About</h1>
        </NavLink>
        <NavLink style={navLinkStyles} to={"/contact"}>
          <h1 className="nav">Contact</h1>
        </NavLink>
      </div>
    </>
  );
};

export default Header;
