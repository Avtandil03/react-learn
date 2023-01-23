import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "c", body: "c"},
    {id: 2, title: "b", body: "a"},
    {id: 3, title: "a", body: "b"},
  ])

  const [selectedSort, SetSelectedSort] = useState('');
  function createPost(newPost){
    setPosts([...posts, newPost]);
  }

  function removePost(post){
    setPosts( posts.filter(p=> p.id !== post.id))
  }

  function sortPosts(sort){
    SetSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    console.log(sort)
  }

  
  return (
    <div className="App">
      <PostForm create={createPost} posts={posts}/>
      <hr style={{margin: '15px 0', borderTop: '1px solid gray'}}/>
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]} 
        defaultValue='Сортировка'/>
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
