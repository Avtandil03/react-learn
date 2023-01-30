import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const postId = useParams().id
  const [post, setPost] = useState({});
  const [comments, setCommetns] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async(id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  });
  const [fetchCommentById, isComLoading, ComError] = useFetching(async(id) => {
    const response = await PostService.getCommentsById(id)
    setCommetns(response.data);
  });
  useEffect(() => {
    fetchPostById(postId)
    fetchCommentById(postId)
  },[])

  return (
    <>
      {isLoading
        ? <Loader/>
        : <h1>{post.id}. {post.title}.</h1>
      }
      <h2>Comments</h2>
      {isComLoading
        ? <Loader/>
        : <div>
            {comments.map(com => 
                <div key={com.id} style={{marginTop: "15px"}}>
                  <h5>{com.email}</h5>
                  <div>{com.body}</div>
                </div>
              )
            }
          </div>

      }
    </>
  );
};

export default PostIdPage;