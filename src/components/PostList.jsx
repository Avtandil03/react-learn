import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}> Posts not found =( </h1>
  }

  return (
    <div><h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index, nodeRef) =>
          <CSSTransition
            key={post.id}
            timeout={200}
            classNames="post">

            <PostItem remove={remove} number={index + 1} post={post}></PostItem>
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  );
};

export default PostList;