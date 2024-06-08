import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='flex gap-8'>
      <Link>Projects</Link>
      <Link>Contact</Link>
      <Link>Abouut me</Link>
    </nav>
  )
}

export default Navbar
