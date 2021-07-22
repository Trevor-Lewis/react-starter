import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import { CardHome } from "./Components/CardHome";

// API
import { apiURL } from "./API/apiUrl";

// Material-UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    marginTop: "4rem",
  },
  cardContainer: {
    textDecoration: "none",
  },
}));

export const Home = () => {
  const [userTotal, setUserTotal] = useState("");
  const [computerTotal, setComputerTotal] = useState("");

  const getAPI = async (setStateTotal, apiReq) => {
    try {
      const results = await axios.get(`${apiURL}${apiReq}`);
      setStateTotal(results.data.length.toString());
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getAPI(setUserTotal, "/users");
    getAPI(setComputerTotal, "/computers");
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <CardHome link="/users/1" title="Users" total={userTotal} icon="users" />
      <CardHome
        link="/computers/1"
        title="Computers"
        total={computerTotal}
        icon="computers"
      />
    </div>
  );
};
