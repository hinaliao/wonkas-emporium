import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState();
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const subtotal = cartItems.reduce(
    (item) => item.quantity * item.price,
    0
  );

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  //   const handleDeleteProduct = (product) => {}

  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <div className="cart-items">
        <div className="cart-items-header">
          <h2>Your Cart</h2>
        </div>
        {cartItems.length === 0 && (
          <div className="cart-items-empty"> No items are added.</div>
        )}

        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              Product
              <button
                className="cart-item-delete"

                // onClick={handleDeleteProduct}
              >
                x
              </button>
              <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
              />
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-items-function">
                Quantity
                <button
                  className="cart-items-remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
                <div className="cart-items-price">{item.quantity}</div>
                <button
                  className="cart-items-add"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="subtotal-price-name">
          Price
          <div className="cart-items-total-price">${subtotal}</div>
        </div>

        <div className="cart-total">
          Cart Totals
          <div className="cart-items-total-price">Totals: ${totalPrice}</div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>

      <div className="footer-btn">
        {cartItems.length >= 1 && (
          <button className="clear-cart-btn" onClick={handleClear}>
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
