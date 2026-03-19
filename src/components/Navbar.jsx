import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  return (
     <nav className='bg-purple-400 flex justify-between gap-1 p-5 text-2xl items-center font-bold text-white'>
     <span className='flex items-center gap-2 '>   <h>React Notes App  </h><FaBookOpen className='text-amber-300'/></span>
        <div className='flex gap-2'>
            <NavLink to='/' className='font-normal text-lg'>Home</NavLink>
        <NavLink to='/about' className='font-normal text-lg'>About</NavLink>
        </div>
    
    </nav>
  )
}

export default Navbar