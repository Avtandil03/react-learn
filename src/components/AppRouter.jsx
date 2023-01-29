import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import ErrorPages from '../pages/ErrorPages'
import { privateRoutes, publicRoutes } from '../router/index'
import {AuthContext} from '../context/index'
import Loader from '../UI/loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if(isLoading){
    return <Loader/>
  }
  return (
    <Routes>
      {(isAuth)
        ?
        privateRoutes.map(route =>
          <Route
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )
        :
        publicRoutes.map(route =>
          <Route 
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ) 
      }
      <Route 
        element={<ErrorPages/>} 
        path='*'
      />
    </Routes> 
  );
};

export default AppRouter;