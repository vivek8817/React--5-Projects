import React from 'react'

const SubmitBtn = ({isSubmitting, disabled}) => {
  return (
     <button
      type="submit"
      disabled={disabled || isSubmitting}
      className="bg-blue-500 text-white px-4 py-2 rounded w-full"
    >
      {isSubmitting ? "Submitting..." : "Register"}
    </button>
  )
}

export default SubmitBtn