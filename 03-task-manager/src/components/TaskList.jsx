import React from 'react'
import TaskItem from "./TaskItem";

const TaskList = ({tasks, dispatch}) => {
  return (
   <div className="space-y-2">

     {tasks.map((task) => (
       <TaskItem key={task.id} task={task} dispatch={dispatch} /> 
     ))}

    </div>
  )
}

export default TaskList