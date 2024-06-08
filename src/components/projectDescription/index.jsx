import React from 'react'

function ProjectDescription({header, text}) {
  return (
    <div className=' mb-4'>
      <h3 className='font-bold text-xl md:text-2xl pb-4'>{header}</h3>
      <p className='sm:text-lg lg:text-xl'>{text}</p>
    </div>
  )
}

export default ProjectDescription
