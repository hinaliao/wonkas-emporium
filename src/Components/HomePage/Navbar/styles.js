import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  navbar: {
    boxShadow: "none",
    borderBottom: "transparent",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "rgba(99, 84, 158, 1)",
    },
  },
  title: {    
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "20px",
    color: "rgba(13, 14, 67, 1)"
  },
  tags: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    color: "rgba(251, 36, 72, 1)",
  },
  image: {
    marginRight: "10px",
    marginLeft: "20px",
    width: '100px',
    height: '42px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  centralBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyCcontent: "center",
    alignIitems: "center",
    width: "auto",
    position: "relative",
    paddingLeft: "25%",
    paddingRight: "25%",
},
  
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
/*     backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    }, */
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
