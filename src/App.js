import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Products, Cart, Checkout, Footer } from "./Components";

import { CssBaseline } from "@material-ui/core";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const fetchProducts = async () => {
    // response (destructured)
    const { data } = await commerce.products.list(); //data -> products
    setProducts(data);
  };

  const fetchCart = async () => {
    // const response = await commerce.cart.retrieve();
    // setCart(response);
    setCart(await commerce.cart.retrieve());
  };

  const handleAdd = async (productId, quantity) => {
    //response
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCart = async (itemId, quantity) => {
    const response = await commerce.cart.update(itemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCart(response.cart);
  };

  const handleClearCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleGetCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMsg(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  // console.log(products);
  // console.log(cart);

  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Navbar totalItems={cart.total_items} />
        <Switch style={{ display: 'flex' }}>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAdd}
              handleUpdateCart
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              updQty={handleUpdateCart}
              removeItem={handleRemoveFromCart}
              clearCart={handleClearCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onGetCheckout={handleGetCheckout}
              error={errorMsg}
            />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
