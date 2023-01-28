import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css"   

function App() {
  return (
    <BrowserRouter>
      <div className="navBar">
        <div className="navBar__links">
          <Link to="/about">About our website</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Routes >
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
