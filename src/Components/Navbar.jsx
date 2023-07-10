import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
     <h1><i class="fa-light fa-shirt" style={{ color: 'red' }}></i>Clothes Shoping </h1>
     <Link to={"/"}>Home</Link>
     <Link to={"/login"}>Login</Link>
     <Link to={"/admin"}>Add Product</Link>
    </div>
  )
}

export default Navbar
