import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ErrorPages from "./pages/ErrorPages";
import Posts from "./pages/Posts";
import "./styles/App.css"   
import NavBar from "./UI/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes >
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <ErrorPages/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
