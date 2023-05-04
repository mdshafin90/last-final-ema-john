import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        product.quantity = product.quantity || 1
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping * product.quantity
        quantity = quantity + product.quantity
    }

    const tax = total * 10 / 100
    const grandTotal = total + totalShipping + tax
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;