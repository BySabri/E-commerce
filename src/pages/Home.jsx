import React from 'react'
import Products from '../products/Products'
import "./home.css"

export default function Home({user}) {

  return (
    <>
      <h1 className='home'>Home Page</h1>
      <div className='flex'>
        <Products user={user}/>
      </div>

    </>
  )
}
