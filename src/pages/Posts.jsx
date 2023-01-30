import React, { useEffect, useRef, useState} from "react";
import PostList from "../components/PostList";
import "../styles/App.css"
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../UI/modal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import getPagesCount from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../UI/select/MySelect";

function Posts() {  
  
  const[posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts ,...response.data])
    const totalCount = +response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  },)

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>{
    setPage(page + 1)
  })

  
  useEffect(() => {
    console.log(page)
    fetchPosts();
  }, [page, limit])

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
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: -1, name: 'all posts'},
        ]}    
        defaultValue='number of elements'     
      />

      {postError && 
         <h1 style={{color: 'darkred'}}>Error : {postError}</h1>
      }
      {isPostsLoading &&
         <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      }
      <PostList posts={sortedAndSearchedPosts } title="Posts list" remove={removePost} />
      <div ref={lastElement} style={{height: '5px', background: 'teal'}}/>
      <Pagination 
        totalPages={totalPages}
        page={page}
        setPage={setPage}/>
      
    </div> 
  );
}

export default Posts;