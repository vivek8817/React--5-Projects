import React, {useState, useEffect} from 'react'
import PostList from '../components/posts/PostList'

const Activitysection = () => {

  const [posts, setposts] = useState([]);

  useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setposts(data.slice(0, 5));
      });

  }, [])

  return (
    <div className='border p-4'>

      <h2 className="font-semibold mb-3">
        Recent Activity
      </h2>

      <PostList posts={posts} />


    </div>
  )
}

export default Activitysection