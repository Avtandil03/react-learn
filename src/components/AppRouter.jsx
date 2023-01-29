import React from 'react';
import {Routes, Route} from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts';
import ErrorPages from '../pages/ErrorPages'

const AppRouter = () => {
  return (
    <Routes >
    <Route path="/about" element={<About/> }/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="*" element={<ErrorPages/>}/>
  </Routes>
  );
};

export default AppRouter;