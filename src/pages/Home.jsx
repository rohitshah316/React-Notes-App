import React, { useEffect, useState } from 'react'
import { FaBookOpen } from "react-icons/fa";
import {notes} from '../notes/Notes'
import NoteCard from '../components/NoteCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [notes,setNotes]=useState([]);
    const navigate=useNavigate();


    useEffect(()=>{
      const savedNotes=JSON.parse(localStorage.getItem("notes") || []);
      setNotes(savedNotes);
    },[])


    const createNewNote=()=>{
      const newNote={
        id: Date.now().toString(),
        title: "",
        content: ""
      }

      localStorage.setItem("notes", JSON.stringify([...notes,newNote]));
      navigate(`/note/${newNote.id}`)
    };

    
  
  return (
    <div>

    <nav className='bg-purple-400 flex justify-center gap-1 p-5 text-2xl items-center font-bold text-white'>
        <h1>React Notes App  </h1><FaBookOpen className='text-amber-300'/>

    
    </nav>


<div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1  min-h-auto justify-items-center'>

    {notes.map((note)=>(
        <NoteCard note={note} id={note.id}/>
       ))}

    <div onClick={createNewNote} className='bg-blue-200 w-50  rounded h-50 m-2 text-8xl flex justify-center items-center text-blue-400 cursor-pointer hover:text-blue-500' >
        +
    </div>
</div>
    </div>
  )
}

export default Home