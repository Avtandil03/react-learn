import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css"

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript2", body: "Description"},
    {id: 3, title: "JavaScript3", body: "Description"},
  ])
  const[posts2, setPosts2] = useState([
    {id: 1, title: "Python", body: "Description"},
    {id: 2, title: "Python2", body: "Description"},
    {id: 3, title: "Python3", body: "Description"},
  ])
  
  
  return (
    <div className="App">
      <PostList posts={posts} title = "Список постов" /> 
      <PostList posts={posts2} title = "Список постов2" /> 
    </div>
  );
}

export default App;
