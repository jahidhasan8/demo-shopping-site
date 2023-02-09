

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


import './Product.css'


const Product = ({ product, handleAddToCart }) => {
    const { img, name, seller, price, ratings } = product;
    // const{handleAddToCart}=props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>Name : {name}</h3>
                <h3>Seller : {seller}</h3>
                <h3>Price : ${price}</h3>
                <h3>Ratings : {ratings}</h3>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;