import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MetnuItem, Menu, Typography} from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';

import logo from "/home/desapiero/project-2/src/images/logo-navbar.png"
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
        <AppBar position="fixed" className={classes.AppBar} color="inherit"> 
          <Toolbar>
              <Typography variant="h6" color="inherit">
                <img src={logo} alt="Wonka Logo" height="25px" />
                Wonkalicious
              </Typography>
              <div className={classes.grow}></div>
              <div className={classes.button}></div>
                  <IconButton aria-label="Show cart items" color="inherit">
                      <Badge badgeContent={2} color="secondary">
                          <ShoppingCart />
                      </Badge>
                  </IconButton>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
