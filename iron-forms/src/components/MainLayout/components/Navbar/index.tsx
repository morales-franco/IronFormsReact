import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Navbar = () => {
    const classes = useStyles();
    
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Iron Forms
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
