import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard/ProductCard";
import useStyles from "./styles";

const productsList = [
  { id: 1, name: "Wonka Bar", description: "Chocolate bar.", price: "$5" },
  {
    id: 2,
    name: "Chocolate Ice Cream",
    description: "Wonka chocolate ice cream.",
    price: "$10",
  },
];

const Products = ({ onAddToCart }) => {
  const style = useStyles();

  return (
    <main className={style.content}>
      <div className={style.toolbar} />
      <Grid container justify="center" spacing={4}>
        {productsList.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
