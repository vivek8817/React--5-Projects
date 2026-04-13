import React from 'react'

const StatCard = ({title, value}) => {
  return (
    <div className="border rounded p-4 bg-zinc-700">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
}

export default StatCard