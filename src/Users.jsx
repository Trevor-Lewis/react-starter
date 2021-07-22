import React, { useEffect, useState } from "react";
import axios from "axios";

// API
import { apiURL } from "./API/apiUrl";

// Components
import ItemRow from "./Components/ItemRow";
import Pagination from "./Components/Pagination";

// Material-UI
import {
  makeStyles,
  Typography,
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  cardContainer: {
    textDecoration: "none",
  },
  columnContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    marginTop: "4rem",
  },
  itemContainer: {
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "1rem",
  },
  itemName: {
    color: "#333333",
    fontSize: "1.6rem",
    width: "32%",
    textAlign: "center",
    fontWeight: "700",
  },
  pageNumber: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    width: "60%",
    padding: "1rem",
    borderBottom: "2px solid rgb(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function Users() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [currURL, setCurrURL] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(`${apiURL}/users`);
      setItems(res.data);
      setLoading(false);
    };

    fetchUsers();

    let currentLocation = window.location.pathname;
    let currURL = currentLocation.split("").slice(7).join("");
    console.log(currURL);
    if (currURL !== 1) {
      setCurrentPage(currURL);
      setCurrURL(currURL);
    } else {
      setCurrURL(1);
      setCurrentPage(1);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "React App", `/users/${currURL}`);
  }, [currURL]);

  // Get Current Items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrURL(pageNumber);
  };

  const classes = useStyles();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={classes.columnContainer}>
      <div className={classes.pageTitle}>
        <Typography variant="h1" className={classes.title}>
          Users
        </Typography>
      </div>
      <div className={classes.itemContainer}>
        <Typography className={classes.itemName}>Display Name</Typography>
        <Typography className={classes.itemName}>Email</Typography>
        <Typography className={classes.itemName}>Last Logon</Typography>
      </div>
      {currentItems.map((item, index) => (
        <ItemRow key={index} item={item} />
      ))}
      <div className={classes.pageNumber}>
        <Typography className={classes.itemName}>
          Page: {currentPage}
        </Typography>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        className={classes.paginationContainer}
      />
    </div>
  );
}
