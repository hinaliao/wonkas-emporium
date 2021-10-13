import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
<<<<<<< HEAD
  appBar: {
=======
  navbar: {
>>>>>>> 167d5386d27b784dcfcea5306540f2f5e327644d
    boxShadow: "none",
    borderBottom: "transparent",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
<<<<<<< HEAD
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
    width: '139px',
    height: '63px',
=======
  title: {    
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    marginTop: "20px",
    marginBottom: "20px",
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
>>>>>>> 167d5386d27b784dcfcea5306540f2f5e327644d
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
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
<<<<<<< HEAD
    // vertical padding + font size from searchIcon
=======
>>>>>>> 167d5386d27b784dcfcea5306540f2f5e327644d
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
<<<<<<< HEAD

















=======
>>>>>>> 167d5386d27b784dcfcea5306540f2f5e327644d
