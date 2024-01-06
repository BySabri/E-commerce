import React from 'react'
import Products from '../products/Products'
import "./home.css"

export default function Home({user}) {

  return (
    <>
      <h1 className='home'>Site hala geliştirilmektedir zamanım kalmadığı için yarım  atılmıştır!!!!!!! Tamamlanmış halini linkedIn üzerinden paylaşacağım www.linkedin.com/in/eyubsabridemir</h1>
      <div className='flex'>
        <Products user={user}/>
      </div>

    </>
  )
}
