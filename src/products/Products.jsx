import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import "./products.css"

export default function Products({user}) {
    const [last10Products, setLast10Products] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(res => setLast10Products(res))
    })
    
    return (
        <>
            <h2>Products :</h2>
            <div className='products'>
                {last10Products.map(item => <ProductCard user={user} key={item.id} item={item}></ProductCard>)}
            </div>
        </>
    )
}
