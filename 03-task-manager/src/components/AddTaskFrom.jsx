import React from 'react'
import { useState } from 'react'

const AddTaskFrom = ({dispatch}) => {

  const [text, settext] = useState('')

  function handleAdd() {
    if (!text.trim()) {
      return
    }

    dispatch({type: 'ADD_TASK', payload: text})

    settext('');
  }
  

  return (
    <div className="flex gap-2 mb-4">

      <input
        type="text"
        placeholder="Add new task..."
        className="border p-2 flex-1"
        onChange={(e) => {
          settext(e.target.value);
        }
        }
      />

      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>

    </div>
  )
}

export default AddTaskFrom