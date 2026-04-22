import React from 'react'
import { useReducer } from 'react'
import { taskReducer, initialState } from '../reducer/TaskReducer'

import AddTaskForm from '../components/AddTaskFrom'
import FilterBar from '../components/FilterBar'
import TaskList from '../components/TaskList'

const TaskManager = () => {

  const [state, dispatch] = useReducer(taskReducer, initialState);


  
  return (
     <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-semibold mb-4">
        Task Manager
      </h1>

      <AddTaskForm dispatch={dispatch} />

      <FilterBar />

      <TaskList  tasks={state.tasks} dispatch={dispatch}/>

    </div>
  )
}

export default TaskManager