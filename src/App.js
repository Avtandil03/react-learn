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
import getPagesCount from "./utils/pages";
import Pagination from "./UI/pagination/Pagination";

function App() {  
  
  const[posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  },)
  
  useEffect(() => {
    fetchPosts();
  }, [page])

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
      <Pagination 
        totalPages={totalPages}
        page={page}
        setPage={setPage}/>
      
    </div> 
  );
}

export default App;
