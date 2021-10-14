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
  // console.log(product);
  const handleAdd = () => onAddToCart(product.id, 1);

  return (
    <Card className={style.root}>
      <CardMedia
        className={style.media}
        image={product.image.url}
        title={product.name}
<<<<<<< HEAD
        //style={{ objectFit: "contain" }}
=======
>>>>>>> 643980bf1b7a668cd0f6072b93f9d8adb513b50f
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
