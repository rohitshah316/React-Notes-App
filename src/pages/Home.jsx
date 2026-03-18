import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import {notes} from '../notes/Notes'
import NoteCard from '../components/NoteCard';

const Home = () => {
  return (
    <div>

    <nav className='bg-purple-400 flex justify-center gap-1 p-5 text-2xl items-center font-bold text-white'>
        <h1>React Notes App  </h1><FaBookOpen className='text-amber-300'/>

    
    </nav>


<div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1  min-h-auto justify-items-center'>

    {notes.map((note)=>(
        <NoteCard note={note} id={note.id}/>
       ))}
</div>
    </div>
  )
}

export default Home