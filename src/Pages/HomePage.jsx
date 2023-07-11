import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import ProductList from '../Components/ProductList'
import SideBar from "../Components/SideBar"

const HomePage = () => {

  return (
    <div>
    <div><Navbar/></div>
    <div style={{display:"flex",gap:"20px"}}>
      <div style={{width:"20%"}}>
      <SideBar/> </div>
      <div style={{width:"80%"}}><ProductList/></div>
     
      </div>

    </div>
  )
}

export default HomePage
