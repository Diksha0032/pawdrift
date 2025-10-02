import { useState } from 'react'
import React from 'react'
import './index.css'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hkb from './components/Hkb'
import Petcard from './components/Petcard'
import petsData from "./assets/pets.json"
import Landingpage from './pages/Landingpage'
import Adopt from './pages/Adopt'
import Adoptpfp from './pages/adoptpfp'
import Rescue from './pages/Rescue'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adopt/:id" element={<Adoptpfp />} />
        <Route path="/rescue" element={<Rescue />} />
      </Routes>
      
    </Router>

  )
}

export default App
