import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "c", body: "c"},
    {id: 2, title: "b", body: "a"},
    {id: 3, title: "a", body: "b"},
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    if(selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }

    return posts;

  }

  const sortedPosts = getSortedPosts()

  function createPost(newPost){
    setPosts([...posts, newPost]);
  }

  function removePost(post){
    setPosts( posts.filter(p=> p.id !== post.id))
  }

  function sortPosts(sort){
    setSelectedSort(sort)
  }

  
  return (
    <div className="App">
      <PostForm create={createPost} posts={posts} />
      <hr style={{ margin: "15px 0", borderTop: "1px solid gray" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск... '
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
          defaultValue="Сортировка"
        />
      </div>
      {posts.length ? (
        <PostList posts={sortedPosts } title="Список постов" remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}> Posts not found =( </h1>
      )}
    </div>
  );
}

export default App;
