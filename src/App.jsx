import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
// import Test from './pages/Test'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
