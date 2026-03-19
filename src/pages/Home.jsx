import React, { useContext, useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const Home = () => {

    const navigate=useNavigate();
    const {notes,setNotes}=useContext(NotesContext)

    useEffect(()=>{
      const savedNotes=JSON.parse(localStorage.getItem("notes") || "[");
      setNotes(savedNotes);
    },[setNotes])


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

   


<div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1  min-h-auto justify-items-center'>

    {notes.map((note)=>(
        <NoteCard note={note} key={note.id}/>
       ))}

    <div onClick={createNewNote} className='bg-blue-200 w-50  rounded h-50 m-2 text-8xl flex justify-center items-center text-blue-400 cursor-pointer hover:text-blue-500' >
        +
    </div>
</div>
    </div>
  )
}

export default Home