import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'



function App() {

  return (
    <div>
      <Router>
       <Header/>
       <Routes>
         <Route to="/" element={<Dashboard/>}/>
         <Route to="SignUp" element={<SignUp/>}/>
         <Route to="SignIn" element={<SignIn/>}/>
       </Routes>
     </Router>
    </div>
  )
}

export default App
