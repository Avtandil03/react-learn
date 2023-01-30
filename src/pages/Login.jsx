import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate()
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    navigate('/posts')
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='enter your username'></MyInput>
        <MyInput type='passwork' placeholder='enter the password'></MyInput>
        <MyButton >sign up</MyButton>
      </form>
    </>
  );
};

export default Login;