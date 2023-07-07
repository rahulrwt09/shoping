import React from 'react'
import HomePage from './HomePage'
import Admin from './Admin'
import Login from './Login'
import {Routes, Route} from "react-router-dom";
const MainRoute = () => {
  return (
   <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/login" element={<Login/>}/>
    
  <Route path="*" element={<h3>Page Not Found 404</h3>}/>
    
   </Routes>
  )
}

export default MainRoute
