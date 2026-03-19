import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineOpenInFull } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const NoteCard = ({note}) => {

    const navigate=useNavigate();


    const openNote=()=>{
      navigate(`/note/${note.id}`);
    };



  return (
    <div className='bg-blue-200 w-50  rounded h-50 m-2  relative  flex flex-col'>
           <div className='flex-1 overflow-auto scrollbar-hide px-5 py-2'>
             <h2 className='font-bold text-xl'>{note.title  || "Untitled"}</h2>
            <p className='text-sm text-wrap '>{note.content?.substring(0,200) || "No Content"}</p>
           </div>

<div className='bg-blue-300 absolute bottom-0 right-0 w-full flex justify-between rounded-b'>
            <button className='text-white  px-1 cursor-pointer flex items-center hover:text-gray-100'><MdOutlineOpenInFull className='hover:scale-110 ' onClick={openNote}/>
Open/Edit</button>
            <button className='text-red-500 text-2xl cursor-pointer hover:scale-110  px-1'><MdDelete />
</button>
</div>
        </div>
  )
}

export default NoteCard