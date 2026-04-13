import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="border p-3 rounded bg-zinc-700">

      <p className="font-medium">
        {user.name}
      </p>

      <p className="text-sm text-gray-200">
        {user.email}
      </p>

      <p className="text-sm text-gray-200">
        {user.company.name}
      </p>

    </div>
  );
}

export default UserCard