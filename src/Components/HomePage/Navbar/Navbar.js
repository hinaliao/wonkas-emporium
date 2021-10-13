import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, MenuIcon, } from "@material-ui/icons";

import logo from "/home/desapiero/project-2/src/images/logo-navbar.png";
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
           <img src={logo} alt="Wonka Logo" height="25px" />
          </Typography>

        <div className={style.centralBox}>
          <Typography
            component={Link}
            to="/"
            className={style.title}
            color="rgba(251, 36, 72, 1)"
          >
            Home
          </Typography>

          <Typography
            component={Link}
            to="/"
            className={style.title}
            color="rgba(251, 36, 72, 1)"
          >
            About
          </Typography>

          <Typography
            component={Link}
            to="/"
            className={style.title}
            color="rgba(251, 36, 72, 1)"
          >
            Shop
          </Typography>
        </div>
          <div className={style.grow} />
          {location.pathname === "/" && (
            <div className={style.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
               <Typography
            component={Link}
            to="/"
            className={style.title}
            variant="h5"
            color="rgba(251, 36, 72, 1)"
          >
            Login
          </Typography>
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