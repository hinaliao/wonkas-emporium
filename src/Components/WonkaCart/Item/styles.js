import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 260,
    backgroundSize: 'contain',
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-around",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
