import React, { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'

const Statssection = () => {

  const [users, setusers] = useState([])
  const [posts, setposts] = useState([])


  useEffect(() => {
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setusers(data))

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setposts(data));


  }, [])

  const totalUser =  users.length
  const totalPosts = posts.length

  const avgPostperUser = totalUser > 0 ? (totalPosts/totalUser).toFixed(2) : 0;

  return (
    <div>
      <h2 className="font-semibold mb-3">
        Statistics
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <StatCard title="Users" value={totalUser} />

        <StatCard title="Posts" value={totalPosts} />

        <StatCard title="AvgPost/User" value={avgPostperUser} />

      </div>

    </div>
  )
}

export default Statssection