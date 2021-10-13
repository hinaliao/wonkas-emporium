import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item, updQty, removeItem }) => {
  const style = useStyles();

  const handleUpdateCart = (lineItemId, newQuantity) =>
  updQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => removeItem(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={style.media}
      />
      <CardContent className={style.cardContent}>
        <Typography variant="h3">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>

      <CardActions className={style.cardActions}>
        <div className={style.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCart(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCart(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
