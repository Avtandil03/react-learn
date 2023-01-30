import React, {useState, useEffect} from "react";
import { HashRouter, useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.css"   
import NavBar from "./UI/navbar/NavBar";
import {AuthContext} from './context/index'


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoadin] = useState(true)
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoadin(false)
  },[])


  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading
      }}
    >
      <HashRouter>
        <NavBar />
        <AppRouter />
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
