import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({  
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  clearBtn: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
    backgroundColor: '#FB2448',
  },
  checkoutBtn: {
    minWidth: "150px",
    backgroundColor: '#19D16F',
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
