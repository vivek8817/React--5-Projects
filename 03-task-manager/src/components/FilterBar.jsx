import React from 'react'

const FilterBar = () => {
  return (
    <div className="flex gap-3 mb-4">

      <button className="border px-3 py-1">
        All
      </button>

      <button className="border px-3 py-1">
        Active
      </button>

      <button className="border px-3 py-1">
        Completed
      </button>

    </div>
  )
}

export default FilterBar