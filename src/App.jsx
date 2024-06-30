import React from 'react'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'

const App = () => {

  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
     
    </div>
  )
}

export default App
