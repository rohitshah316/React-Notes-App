import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NoteEditor from '../components/NoteEditor';

const NotePage = () => {

  const {id}=useParams();
  const navigate=useNavigate();
  const [note,setNote]=useState({title:"",content:""});


  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("notes") || []);
    const existingNote=savedNotes.find(n=>n.id===id);

    if(existingNote) setNote(existingNote);
    else navigate("/");

  },[id,navigate]);

  const handleSave=()=>{
    const savedNotes=JSON.parse(localStorage.getItem("notes") || []);
    const updatedNotes=savedNotes.map(n=>n.id===id?note:n);
    localStorage.setItem("notes",JSON.stringify(updatedNotes));
    navigate("/");
  }



  return (
    <NoteEditor note={note} setNote={setNote} onSave={handleSave}/>
  )
}

export default NotePage