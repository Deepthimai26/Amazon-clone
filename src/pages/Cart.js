import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  const updateCartStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.product_id !== id);
    updateCartStorage(updatedCart);
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="card mb-3" key={item.product_id}>
            <div className="card-body d-flex justify-content-between">
              <img src={item.images} alt={item.name} width="100" />
              <div>
                <h5>{item.name}</h5>
                <p>Rs. {item.price}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.product_id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
