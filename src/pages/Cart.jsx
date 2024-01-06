import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function cart({user}) {
    const [cart, setCart]=useState([])

    useEffect(() =>{
        setCart(JSON.parse(localStorage.getItem('cart'))??[])
    },[])

  return (
    <>
    <h1>Cart</h1>
      <div className="list-group">

        {cart.map((item)=>
            <Link className="list-group-item list-group-item-action" key={item.id} to={`/products/product/${item.id}`}>{item.title}</Link>
          )}

      </div>
    
    </>
  )
}
