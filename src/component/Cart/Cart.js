import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>order summary</h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;