import React, { useState } from 'react'
import './Home.css'
import { faker } from '@faker-js/faker'
import SingleProduct from '../singleProduct/SingleProduct';


faker.seed(100);
const Home = ({cart, setCart}) => {

    const productArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(), 
    }));


    const [products] = useState(productArray);

    console.log(cart)
  return (
      <div className='productConatiner'>
          {products.map((prod) => {
              return <SingleProduct prod={prod} cart={cart} setCart={setCart} />
          })}
    </div>
  )
}

export default Home