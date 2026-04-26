import React from 'react'

const Formfield = ({label, type, name, value, onChange}) => {
  return (
    <div className="mb-4">

      <label className="block mb-1 font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 w-full"
      />

      

    </div>
  )
}

export default Formfield