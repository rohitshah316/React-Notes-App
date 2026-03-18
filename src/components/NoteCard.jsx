import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineOpenInFull } from "react-icons/md";

const NoteCard = ({note}) => {
  return (
    <div className='bg-blue-200 w-50  rounded h-50 m-2  relative  flex flex-col'>
           <div className='flex-1 overflow-auto scrollbar-hide px-5 py-2'>
             <h1 className='font-bold text-xl'>{note.title}</h1>
            <p className='text-sm text-wrap '>{note.content}</p>
           </div>

<div className='bg-blue-300 absolute bottom-0 right-0 w-full flex justify-end rounded-b'>
            <button className='text-white  px-1 hover:scale-110 cursor-pointer'><MdOutlineOpenInFull />
</button>
            <button className='text-red-500 text-2xl cursor-pointer hover:scale-110  px-1'><MdDelete />
</button>
</div>
        </div>
  )
}

export default NoteCard