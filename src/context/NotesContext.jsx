import React, { createContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';


export const NotesContext=createContext();

 

export const NotesProvider=({children})=>{
        

  const navigate=useNavigate();
    const [notes,setNotes]=useState([]);



    const handleDelete=(id)=>{
    const savedNotes=JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes=savedNotes.filter(n=>n.id!==id);
    localStorage.setItem("notes",JSON.stringify(updatedNotes));
     setNotes(updatedNotes);
    navigate("/");
  }
    return(
        <NotesContext.Provider value={{notes,setNotes,handleDelete}}>
            {children}
        </NotesContext.Provider>
    )
}