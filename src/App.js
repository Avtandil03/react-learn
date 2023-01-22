import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostForm from "./components/PostForm";

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript2", body: "Description"},
    {id: 3, title: "JavaScript3", body: "Description"},
  ])

  function createPost(newPost){
    setPosts([...posts, newPost]);
  }

  function removePost(post){

    setPosts( posts.filter(p=> p.id !== post.id))
  }

  
  return (
    <div className="App">
      <PostForm create={createPost} posts={posts}/>
      {posts.length 
        ? 
          <PostList posts={posts} title="Список постов" remove={removePost} />
        :
          <h1 style={{textAlign: 'center'}}> Posts not found =( </h1>
      }
    </div>
  );
}

export default App;
