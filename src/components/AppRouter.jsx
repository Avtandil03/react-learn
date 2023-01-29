import React from 'react';
import {Routes, Route} from 'react-router-dom'
import ErrorPages from '../pages/ErrorPages'
import {routes} from '../router/index'

const AppRouter = () => {
  return (
    <Routes >
      {routes.map(route => 
        <Route 
          key={route.path}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      )}
      <Route path="*" element={<ErrorPages />} />
    </Routes>
  );
};

export default AppRouter;