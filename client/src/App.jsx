import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Lobby from './components/Lobby'
import Room from './components/Room'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Lobby/>}/>
          <Route path="/room/:roomid" element={<Room/>}/>
        </Routes>
    </>
  )
}

export default App
