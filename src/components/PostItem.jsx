import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';


const PostItem = ({post, remove}) => {
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    history(`/posts/${post.id}`);
  }
  return (
    <div className='post'>
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={handleSubmit}>Open</MyButton>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;