import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Lobby from './components/Lobby'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Lobby/>}/>
        </Routes>
    </>
  )
}

export default App
