import React from 'react'

function PrimaryButton({ icon, text  }) {
  return (
      <button className='rounded-md py-2 px-4 flex items-center gap-2 md:text-md lg:text-lg text-white font-medium bg-teal-600'>{icon}{text}</button>
  )
}

export default PrimaryButton
