import React from "react";
import { Link } from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";

const useStyles = makeStyles((theme) => ({
  navigation: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  ul: {
    width: "95%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    listStyle: "none",
  },
  li: {
    width: "10%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 400,
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <nav className={classes.navigation}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/users/1">
              Users
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/computers/1">
              Computers
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
