import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.js";

export default function ProductCard(props) {
  // console.log(props);
  const [product, setProduct] = useState([
    {
      img: "",
      name: "",
      price: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const id = props.match.params.id;
        const response = await axios.get(
          `https://ironrest.herokuapp.com/wonkalicious-products/${id}`
        )
        
        let card = response.data;
        // console.log(card);
        setProduct(Object.values({
          ...product,
          img: card.img,
          name: card.name,
          price: card.price,
        }));
      } catch (err) {}
    }
    fetchData();
  }, [props]);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.img} alt={product.name} />
      <div className="card-body">
        <p className="card-text">{product.name}</p>
        <p className="card-text">{product.price}</p>
      </div>
    </div>
  );
}
