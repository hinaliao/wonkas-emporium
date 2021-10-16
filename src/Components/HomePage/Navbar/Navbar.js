import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, Person } from "@material-ui/icons";

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
              className={style.navLogo}
              src={logo}
              alt="Wonka Logo"
              height="25px"
            />
          </Typography>

          <div className={style.centralBox}>
            <Typography
              component={Link}
              to="/"
              className={style.title}
              color="inherit"
            >
              Home
            </Typography>

            <Typography
              component={Link}
              to="/about"
              className={style.title}
              color="inherit"
            >
              About
            </Typography>

            <Typography
              component={Link}
              to="/"
              className={style.title}
              color="inherit"
            >
              Shop
            </Typography>
          </div>
          <div className={style.grow} />
          {location.pathname === "/" && (
            <div className={style.button}>
              <IconButton>
                <Typography
                  component={Link}
                  to="/"
                  className={style.title}
                  variant="h5"
                  color="inherit"
                >
                  Login
                </Typography>
                <Person />
              </IconButton>

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
