import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Home = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <>
      <h1>This is home page</h1>

      {isAuth
        ?
        <h3 style={{ color: 'darkgreen' }}> You are logged in ...</h3>
        :
        <h3 style={{ color: 'darkred' }}> Please log in and you can get posts</h3>
      }
    </>

  );
};

export default Home;