import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__links">
        <Link to="/about">About our website</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default NavBar;