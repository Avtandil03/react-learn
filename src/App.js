import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.css"   
import NavBar from "./UI/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
