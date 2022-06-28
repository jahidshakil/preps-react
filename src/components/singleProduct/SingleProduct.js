import React from 'react'
import './SingleProduct.css'

const SingleProduct = ({ prod, cart, setCart }) => {
    const cartHandler = () => {
        setCart([...cart,prod])
    }

    const cartHandler2 = () => {
        setCart(cart.filter((c) => c.id !== prod.id
             
        ))
    }
   
  return (
      <div className='products'>
          <img src={prod.image} alt={prod.name} />
          <div className='productDesc'>
              <span style={{ fontWeight: 700 }}>{prod.name}</span>
              <span>$ {prod.price.substring(0,3)}</span>
          </div>

          {cart.includes(prod) ? (
            <button onClick={cartHandler2} className='add'>Remove from Cart</button>
          ) : (
            <button onClick={cartHandler} className='add'>Add to Cart</button>
          )}

         
          

    </div>
  )
}

export default SingleProduct