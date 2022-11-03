import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    // destructure data
    const {  initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>

            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem key={product._id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No items for Review, Please <Link to='/'>Shop More</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/shipping">
                        <button>Procced Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Orders;