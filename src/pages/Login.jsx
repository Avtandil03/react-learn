import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <MyInput type='text' placeholder='enter your username'></MyInput>
        <MyInput type='passwork' placeholder='enter the password'></MyInput>
        <MyButton >sign up</MyButton>
      </form>
    </div>
  );
};

export default Login;