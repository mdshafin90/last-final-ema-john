import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    // console.log(product)
    const { img, name, seller, ratings, price } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;