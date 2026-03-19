import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

const NoteEditor = ({note,setNote,onSave}) => {

    const {handleDelete}=useContext(NotesContext)
  return (
    <div>

    <div className='p-2 rounded bg-blue-50 m-5'>
        <input type="text" 
        value={note.title}
        placeholder='title'
        onChange={(e)=>setNote({...note,title: e.target.value})}
        className='w-full text-2xl font-bold bg-blue-100 outline-none focus:bg-blue-200'
        />
        <textarea 
        value={note.content}
        placeholder='Write your note...'
        onChange={(e)=>setNote({...note,content:e.target.value})}
        className='w-full h-100 outline-none'
        ></textarea>

        
    </div>

    <div className='flex justify-center'>
            <button className='bg-green-500 p-2 font-bold text-white rounded-xl cursor-pointer hover:bg-green-600 ' onClick={onSave}>Save</button>
            <button className='bg-red-500 p-2 font-bold text-white rounded-xl ml-1 cursor-pointer hover:bg-red-600' onClick={()=>handleDelete(note.id)}>Delete</button>
        </div>
    </div>
  )
}

export default NoteEditor