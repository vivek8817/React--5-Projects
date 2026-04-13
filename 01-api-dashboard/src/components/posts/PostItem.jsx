import React from 'react'

const PostItem = ({post}) => {
  return (
    <div className="border-b pb-2">

      <p className="font-medium">
        {post.title}
      </p>

      <p className="text-sm text-gray-600">
        {post.body.slice(0, 80)}...
      </p>

    </div>
  );
}
export default PostItem;