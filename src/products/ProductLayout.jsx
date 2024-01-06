import React from 'react'
import Categories from './Categories'
import Category from './Category'
import Product from './Product'
import { Outlet } from 'react-router-dom'

export default function ProductLayout() {
  return (
    <>
      <div className='row'>
        <div className='col-sm-4'><Categories/></div>
         <div className='col-sm-8'><Outlet/> </div>  
      </div>
    </>
  )
}
