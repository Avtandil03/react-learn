import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({post, remove}) => {
  console.log(post, remove)
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <MyButton onClick={()=>remove(post)}>Delete</MyButton>
    </div>
  );
};

export default PostItem;