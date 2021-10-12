import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Products } from "./Components";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // response (destructured)
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);

  return (
    <div>
      {/* <BrowserRouter> */}
        <Navbar />
        <Products products={products}/>
        {/* <Switch>
          <Route>

          </Route>
        </Switch> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
