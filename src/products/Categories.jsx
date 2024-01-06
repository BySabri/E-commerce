import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./categories.css"

export default function Categories({user}) {
  const[categories, setCategories] = useState([])
  useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=>setCategories(res))
  },[])

  return (
    <>
      <h1>Categories:</h1>
      <div className="">

        {categories.map((category,index)=>
            <Link className="categories" key={index} to={`/products/category/${category}`}>{category}</Link>
          )}

      </div>
    </>
  )
}
