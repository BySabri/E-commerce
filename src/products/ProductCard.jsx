import React from 'react';
import { Link } from 'react-router-dom';
import "./productcard.css";

export default function ProductCard({ item, user }) {
    const productUrl = `/products/product/${item.id}`;

    function handleClick(product) {
        let localCart = JSON.parse(localStorage.getItem('cart')) ?? [];
        let itemIndex = localCart.findIndex(localItem => product.id === localItem.id);

        if (itemIndex >= 0) {
            localCart = localCart.filter(item => item.id !== product.id);
        } else {
            localCart.push({ id: product.id, title: product.title });
        }

        localStorage.setItem('cart', JSON.stringify(localCart));
    }

    return (
        <div className='card-container'>
            <div className="card">
                <Link to={productUrl}>
                    <img src={item.image} className="card-img-top" alt={item.title} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title.substring(0, 25)}...</h5>
                    <p className="card-text">{item.description.substring(0, 45)}...</p>
                    <p className="lead">{item.price}$</p>
                    {user && <button className="buy-btn" onClick={() => handleClick(item)}>Buy</button>}
                </div>
            </div>
        </div>
    );
}
