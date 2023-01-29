import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ErrorPages from '../pages/ErrorPages'
import { privateRoutes, publicRoutes } from '../router/index'

const AppRouter = () => {
  let isAuth = false
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