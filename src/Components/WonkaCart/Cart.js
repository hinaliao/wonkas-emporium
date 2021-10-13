import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./Item/CartItem";
import useStyles from "./styles";

const Cart = ({ cart, updQty, removeItem, clearCart }) => {
  const style = useStyles();

  const handleClearCart = () => clearCart();

  const renderEmptyCart = () => (
    <Typography variant="body1">
      You have no items in your cart, start shopping
      <Link className={style.link} to="/">
        &ensp;here
      </Link>
      !
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} updQty={updQty} removeItem={removeItem} />
          </Grid>
        ))}
      </Grid>
      <div className={style.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={style.clearBtn}
            size="medium"
            type="button"
            variant="contained"
            onClick={handleClearCart}
          >
            Clear cart
          </Button>
          <Button
            className={style.checkoutBtn}
            component={Link}
            to="/checkout"
            size="medium"
            type="button"
            variant="contained"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
  // console.log(cart.line_items.length);

  return (
    <Container>
      <div className={style.toolbar} />
      <Typography className={style.title} variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
