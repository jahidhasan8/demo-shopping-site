
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts]=useState([])
    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart ,product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map(product=><Product product={product} 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <p>selected items :{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;