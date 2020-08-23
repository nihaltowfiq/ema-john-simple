import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart); 
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
        total = Number(total.toFixed(2));
    };
    let shipping = 0;
    if(total > 15){
        shipping = 4.99;
    }
    else if(total > 55){
        shipping = 2.99;
    }
    let tax = (total / 10).toFixed(2);
    let grandTotal = total + shipping + Number(tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: ${cart.length}</p>
            <p><small>Items Price: ${total}</small></p>
            <p><small>Shipping: ${shipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <h4>Order Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;