import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import NotePage from './pages/NotePage'
import {  NotesProvider } from './context/NotesContext'
import About from './pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className=''>

      <BrowserRouter>
     
      <NotesProvider>
 <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
           
            <Route path='/note/:id' element={<NotePage/>}/>
          </Routes>
      </NotesProvider>
      </BrowserRouter>
    </div>
  )
}

export default App