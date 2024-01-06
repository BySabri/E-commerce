import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Categories({user}) {
  const[categories, setCategories] = useState([])
  useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=>setCategories(res))
  },[])

  return (
    <>
      <h1>Categories</h1>
      <div className="list-group">

        {categories.map((category,index)=>
            <Link className="list-group-item list-group-item-action" key={index} to={`/products/category/${category}`}>{category}</Link>
          )}

      </div>
    </>
  )
}
