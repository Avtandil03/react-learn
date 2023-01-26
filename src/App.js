import React, { useEffect, useState} from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {  
  
  const[posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts)
  }, )

  useEffect(() => {
    fetchPosts();
  }, [])

  function createPost(newPost){
    setPosts([...posts, newPost]);
    setModal(false)
  }


  function removePost(post){
    setPosts( posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>getPosts</MyButton>
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
      {postError && 
         <h1 style={{color: 'darkred'}}>Error : {postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <PostList posts={sortedAndSearchedPosts } title="Posts list" remove={removePost} />
      }
    </div>
  );
}

export default App;
