import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <h1> Welcome to My Routing with header</h1>
      <nav className="nav-bar">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/poster">Posts</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
