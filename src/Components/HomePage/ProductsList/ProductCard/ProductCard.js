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

const ProductCard = ({ product, onAddToCart}) => {
  const style = useStyles();
  const handleAdd = () => onAddToCart(product.id, 1);

  return (
    <Card className={style.root}>
      <CardMedia className={style.media} image="" title={product.name} />
      <CardContent>
        <div className={style.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="h6">{product.price}</Typography>
        </div>
      </CardContent>

      <CardActions>
        <IconButton aria-label="Add to Cart" onClick={handleAdd}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
