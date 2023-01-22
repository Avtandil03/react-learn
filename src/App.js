import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css"
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript2", body: "Description"},
    {id: 3, title: "JavaScript3", body: "Description"},
  ])

  const [post, setPost] = useState({title: '', body: ''});
  
  function addNewPost(e) {
    e.preventDefault();
    setPosts([...posts, {...post, id: posts[posts.length-1].id + 1}])
    setPost({title: '', body: ''})
  }
  
  return (
    <div className="App">
      <form>
        <MyInput 
          value={post.title}
          onChange={e => {setPost({...post, title: e.target.value})}}
          type="text" 
          placeholder="Post name" />
        <MyInput 
          value={post.body}
          onChange={e => {setPost({...post, body: e.target.value})}}
          type="text" 
          placeholder="Post description" />
        <MyButton onClick={addNewPost}>
          Create Post
        </MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
