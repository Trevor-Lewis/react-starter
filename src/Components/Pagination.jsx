import React from 'react';

// Material UI
import { makeStyles, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        width: "95%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4rem'
    },
    buttonContainer: {
        width: "95%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        marginBottom: '1rem',
        width: '10%'
    },
    pageTitle: {
        fontWeight: 100,
        marginBottom: '1.4rem'
    }
  }),
);

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const classes = useStyles();

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return(
        <div className={classes.pageContainer}>            
                <Typography className={classes.pageTitle}>
                    Pages
                </Typography>
            <div className={classes.buttonContainer}>
                {pageNumbers.map((number) => (
                    <Button className={classes.button} key={number} onClick={() => paginate(number)}>
                        {number}
                    </Button>
                ))}
            </div>
        </div>
    )
}
export default Pagination;