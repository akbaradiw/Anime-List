import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import AllAnime from './pages/AllAnime'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/anime-list" element={<AllAnime />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
