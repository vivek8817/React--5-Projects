import React from 'react'
import { useParams } from "react-router-dom";

const UserDetails = () => {

  const {id} = useParams();

  return (
    <div>

<h1 className="text-xl font-semibold">
        User Details
      </h1>

      <p>User ID: {id}</p>

    </div>
  )
}

export default UserDetails