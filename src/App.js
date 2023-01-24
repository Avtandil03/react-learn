import React, { useState,useMemo } from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "c", body: "c"},
    {id: 2, title: "b", body: "a"},
    {id: 3, title: "a", body: "b"},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log("-----------")
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    console.log(sortedPosts)
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()) || post.body.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  function createPost(newPost){
    setPosts([...posts, newPost]);
  }

  function removePost(post){
    setPosts( posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} posts={posts} />
      <hr style={{ margin: "15px 0", borderTop: "1px solid gray" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList posts={sortedAndSearchedPosts } title="Список постов" remove={removePost} />
    </div>
  );
}

export default App;
