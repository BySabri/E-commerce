import React from 'react'
import Categories from './Categories'
import { Outlet } from 'react-router-dom'
import  "./productlayout.css"

export default function ProductLayout() {
  return (
    <>
      <div className='prd-ctg'>
        <div className=''><Categories/></div>
        <div className=''><Outlet/> </div>  
      </div>
    </>
  )
}
