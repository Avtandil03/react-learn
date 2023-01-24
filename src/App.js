import React, { useState} from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {  
  
  const[posts, setPosts] = useState([
    {id: 1, title: "c", body: "c"},
    {id: 2, title: "b", body: "a"},
    {id: 3, title: "a", body: "b"},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


  function createPost(newPost){
    setPosts([...posts, newPost]);
    setModal(false)
  }

  function removePost(post){
    setPosts( posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} posts={posts} />
      </MyModal>
      <hr style={{ margin: "15px 0", borderTop: "1px solid gray" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchedPosts } title="Posts list" remove={removePost} />
    </div>
  );
}

export default App;
