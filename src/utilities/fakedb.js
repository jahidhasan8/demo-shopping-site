// use local storage to manage cart data
const addToDb = id =>{
   /*  let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    } */
    

    const shopCart= getStoredCart()
    // add quantity
    const quantity = shopCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shopCart[id] = newQuantity;
    }
    else{
        shopCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shopCart));
}

const getStoredCart=()=>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}




const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
}