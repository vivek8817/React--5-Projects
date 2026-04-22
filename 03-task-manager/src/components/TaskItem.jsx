import React from 'react'


const TaskItem = ({task}) => {
  return (
     <div className="flex items-center justify-between border p-2">

      <div className="flex items-center gap-2">

        <input type="checkbox" />

        <span>
          {task.text}
        </span>

      </div>

      <button className="text-red-500">
        Delete
      </button>

    </div>
  )
}

export default TaskItem