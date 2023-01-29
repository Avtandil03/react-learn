import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Home = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <div>
      {isAuth
        ? 
        <h1> You are logged in ...</h1>
        :
        <h1> Please log in and you can get posts</h1>
      }
    </div>

  );
};

export default Home;