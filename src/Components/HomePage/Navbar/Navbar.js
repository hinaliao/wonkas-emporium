import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, MenuIcon } from "@material-ui/icons";

import logo from "../../../images/logo-navbar.png";
import useStyles from "./styles";

function Navbar({ totalItems }) {
  const style = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={style.navbar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={style.tags}
            color="inherit"
          >
            <img
              src={logo}
              alt="wonkalicious"
              height="30px"
              className={style.image}
            />
          </Typography>

          <Typography
            component={Link}
            to="/"
            className={style.title}
            variant="h5"
            color="rgba(251, 36, 72, 1)"
          >
            Home
          </Typography>

          <div className={style.grow} />
          {location.pathname === "/" && (
            <div className={style.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
