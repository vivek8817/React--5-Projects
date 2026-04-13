import React from 'react'
import PostItem from './PostItem';

const PostList = ({posts}) => {
  return (
     <div className="flex-1">

      {posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}

    </div>
  );
}

export default PostList