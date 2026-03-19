import React from 'react'

const About = () => {
  return (
    <div className='text-white m-5 mx-3 '>
    <h1 className='text-3xl font-bold mb-5'>React Notes App</h1>
    <p>This is a simple and efficient React Notes App created by Rohit Shah. The application is designed to help users quickly create, edit, and manage their notes in a clean and user-friendly interface.</p>

    <h2 className='text-2xl font-bold mt-10'>Features</h2>
    <ul>
         <li>Create new notes instantly from the home page</li>
          <li>Dynamic routing for individual note editing</li>
          <li>Edit and update notes in real-time</li>
          <li>Delete notes</li>
          <li>Persistent data storage using localStorage</li>
          <li>Responsive design using Tailwind CSS</li>
    </ul>
    <h2 className='text-2xl font-bold mt-10'>How It Works</h2>
     <ul>
                <li>Component-based architecture for reusable UI elements</li>
          <li>Context API for global state management (notes, add, delete, update)</li>
          <li>Dynamic routing to navigate between notes</li>
          <li>Local storage integration to save and retrieve notes even after page refresh</li>

     </ul>
    <h2 className='text-2xl font-bold mt-10'>Purpose</h2>
     <ul>
        <li>React fundamentals</li>
          <li>State management with Context API</li>
          <li>Routing with dynamic parameters</li>
          <li>Clean UI design with Tailwind CSS</li>
     </ul>

<h2 className='text-2xl font-bold mt-10'>Created By Rohit Shah</h2>
<p>Github Repository <a className='italic text-red-500 cursor-pointer' href='https://github.com/rohitshah316/React-Notes-App.git' target='_blank'>Github Link</a></p>

    </div>
  )
}

export default About