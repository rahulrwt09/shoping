import React from 'react'
import { Image, Heading, Text, Box  } from '@chakra-ui/react'
import "./display.css"
const ProductCard = ({product}) => {
  return (
     <>
     
     <div className='box'>
       
      
       
       <Image src={product.image}/>
       
   
       <Text fontWeight="bold">Brand:{" "}{product.brand}</Text>
       <Text> <Box as="span" fontWeight="bold" >Price:</Box>{" "}{product.price}</Text>
       <Text><Box as="span" fontWeight="bold" >Description:</Box>{" "}{product.description}</Text>
       <Text><Box as="span" fontWeight="bold" >Gender:</Box>{" "}{product.gender}</Text>
       
       </div>

    </>
  )
}

export default ProductCard
