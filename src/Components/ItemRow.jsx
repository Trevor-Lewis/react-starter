import React from "react";

// Material-UI
import {
  Accordion,
  AccordionSummary,
  makeStyles,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    width: "95%",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "1rem",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  expandedRow: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  itemName: {
    color: "white",
    fontSize: "1rem",
    width: "32%",
    textAlign: "center",
  },
  iconContainer: {
    width: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  itemNameExpanded: {
    color: "white",
    width: "100%",
    paddingBottom: "1rem",
  },
  expandedTitle: {
    color: "white",
    width: "100%",
    borderBottom: "2px solid white",
    paddingBottom: "1rem",
    marginBottom: "1rem",
  },
}));

const ItemRow = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.itemContainer}>
      {/* Check if User, or Computer */}
      {props.item.email ? (
        <Accordion className={classes.itemContainer}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.mainRow}
          >
            <div className={classes.mainRow}>
              <Typography className={classes.itemName}>
                {props.item.displayname}
              </Typography>
              <Typography className={classes.itemName}>
                {props.item.email}
              </Typography>
              <Typography className={classes.itemName}>
                {props.item.lastLogon}
              </Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails className={classes.expandedRow}>
            <Typography className={classes.expandedTitle}>DETAILS:</Typography>
            <Typography className={classes.itemNameExpanded}>
              ID: {props.item.id}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              DEPARTMENT: {props.item.department}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              HOME DIRECTORY: {props.item.homeDirectory}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              Title: {props.item.title}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              Domain: {props.item.domain}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              Manager ID: {props.item.managerId}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion className={classes.itemContainer}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.mainRow}
          >
            <Typography className={classes.itemName}>
              {props.item.displayname}
            </Typography>
            <Typography className={classes.itemName}>
              {props.item.os}
            </Typography>
            <Typography className={classes.itemName}>
              {props.item.osVersion}
            </Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.expandedRow}>
            <Typography className={classes.expandedTitle}>DETAILS:</Typography>
            <Typography className={classes.itemNameExpanded}>
              ID: {props.item.id}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              Domain: {props.item.domain}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              DNS HOST NAME: {props.item.dnsHostName}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              IP ADDRESS: {props.item.ipAddress}
            </Typography>
            <Typography className={classes.itemNameExpanded}>
              Manager ID: {props.item.managerId}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default ItemRow;

// USER
// {"id":"27c98ceb-1426-4acb-9a90-00352a8f0259","displayname":"Pansy Easlea","email":"peasleaig@backendapi.com","lastLogon":"2018-07-10T01:16:52.929","department":"Support","homeDirectory":null,"title":"Environmental Tech","domain":"backendapi.com","managerId":"40dc87e6-ad96-4299-a8ff-2eaa0ef81bf7"}

// COMPUTER
// {"id":"502811d7-bc3e-44a5-937d-0b976f719531","displayname":"COMPSLS13","os":"Windows 7 Enterprise","osVersion":"6.1 (7601)","domain":null,"dnsHostName":"COMPSLS13.backendapi.com","ipAddress":null,"managerId":"40dc87e6-ad96-4299-a8ff-2eaa0ef81bf7"}
