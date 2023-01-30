import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from '../button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
    navigate('/login')
    
  }

  return (
    <div className="navBar">
      <MyButton onClick={logOut} >Sign out</MyButton>
      <div className="navBar__links">
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;