import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const ProductCard = ({ product, onAddToCart }) => {
  const style = useStyles();  
  const handleAdd = () => onAddToCart(product.id, 1);

  return (
    <Card className={style.root}>
      <CardMedia
        className={style.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={style.cardContent}>
          <Typography variant="body1" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="body1">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>

      <CardActions disableSpacing className={style.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAdd}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
