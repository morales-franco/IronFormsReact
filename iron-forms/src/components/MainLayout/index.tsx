import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Navbar } from './components';
import { Props } from './types';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: 5
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
    }
}))


export const MainLayout: React.FC<Props> = ({ children }) => {
    const classes = useStyles();
    
    return (
        <>
            <Navbar />
             <main className={classes.content}>
                <div className={classes.toolbar} />

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {children}
                        </Grid>
                    </Grid>
            </main>
        </>
    )
}
