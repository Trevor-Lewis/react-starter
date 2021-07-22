import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// Material-UI
import { Card, makeStyles, Typography } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none'
    },
    card: {
        backgroundColor: theme.palette.background.paper,
        width: '75%',
        backgroundShadow: theme.shadows[4],
        transition: theme.transitions.easing.easeInOut,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundShadow: theme.shadows[12],
        }
    },
    iconContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0'
    }
  }),
);


export const CardHome = ({link, title, total, icon}) => {
    const [cardIcon, setcardIcon] = useState()
    
    useEffect(() => {
        if(icon === 'users') {
            setcardIcon(<PersonIcon fontSize="large" />)
        } else if (icon === 'computers') {
            setcardIcon(<DesktopMacIcon fontSize="large"/>)
        }
    }, [icon])

    const classes= useStyles();

    return (
        <Link to={link} className={classes.cardContainer}>
            <Card className={classes.card}>
                <Typography variant="h3" className={classes.cardCopy}>
                    {title}
                </Typography>

                <div className={classes.iconContainer}>
                    {cardIcon}
                </div>

                <div className={classes.totalContainer}>
                    <Typography variant="h1" className={classes.totalCopy}>
                        {total}
                    </Typography>
                </div>

            </Card>
        </Link>
    );
}