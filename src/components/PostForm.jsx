import React, { useState }  from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({create, posts}) => {

  const [post, setPost] = useState({title: '', body: ''});
    
  function addNewPost(e) {
    e.preventDefault();
    const lastId = (posts.length) ? posts[posts.length - 1].id + 1 : 1;
    const newPost = {
      ...post, id: lastId 
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
    <MyInput 
      value={post.title}
      onChange={e => {setPost({...post, title: e.target.value})}}
      type="text" 
      placeholder="Post name" />
    <MyInput 
      value={post.body}
      onChange={e => {setPost({...post, body: e.target.value})}}
      type="text" 
      placeholder="Post description" />
    <MyButton onClick={addNewPost}>
      Create Post
    </MyButton>
  </form>
  );
};

export default PostForm;