import React from 'react'
import Navbar from '../Coponents/Navbar'
import ProductList from '../Coponents/ProductList'
import SideBar from '../Coponents/SideBar'

const HomePage = () => {
  return (
    <div>
       <SideBar/>
      <Navbar/>
      <ProductList/>
    </div>
  )
}

export default HomePage
