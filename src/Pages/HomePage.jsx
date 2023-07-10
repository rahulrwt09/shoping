import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import ProductList from '../Components/ProductList'
import SideBar from "../Components/SideBar"

const HomePage = () => {
  return (
    <div>
    <div><Navbar/></div>
      <div>
      <SideBar/>
      <ProductList/>
      </div>
      

    </div>
  )
}

export default HomePage
