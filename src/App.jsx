import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import NotePage from './pages/NotePage'


const App = () => {
  return (
    <div className=''>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/note/:id' element={<NotePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App