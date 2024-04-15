import React, { useState } from 'react';

function CartPage({ products }) {
    const [cartItems, setCartItems] = useState(products.map(product => ({
        ...product,
        quantity: 1
    })));

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {

                return { ...item, quantity };
            }
            return item;
        }));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="container">
            <h1>Shopping Cart</h1>
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                            <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            />
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <p>Total: ${calculateTotal()}</p>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default CartPage;
