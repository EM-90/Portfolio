import React from 'react'

function SecondaryButton({ icon, text  }) {
  return (
      <button className=' rounded-md py-2 px-4 flex items-center md:text-md lg:text-lg gap-2  text-white font-medium bg-blue-600'>{icon}{text}</button>
  )
}

export default SecondaryButton