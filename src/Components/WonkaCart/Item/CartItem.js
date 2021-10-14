import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item, updQty, removeItem }) => {
  const style = useStyles();

  const handleUpdateCart = (itemId, newQuantity) =>
  updQty(itemId, newQuantity);

  const handleRemoveFromCart = (itemId) => removeItem(itemId);

  return (
    <Card className="cart-item">
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={style.media}
      />
      <CardContent className={style.cardContent}>
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="body1">
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
        <br />
        <Button
          variant="contained"
          type="button"
          onClick={() => handleRemoveFromCart(item.id)}
          className={style.btn}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
