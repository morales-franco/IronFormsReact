import React, { useState } from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserRegistrationForm } from './components';
import { Country } from '../../models/country';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
}));

export const UserRegistration = () => {
    const classes = useStyles();

    const [countries, setCountries] = useState<Country[]>([
        {
            id: 1,
            name: "Argentina"
        },
        {
            id: 2,
            name: "Canada"
        },
        {
            id: 3,
            name: "New Zealand"
        },
    ]);


    
    
    return (
        <>
            <Paper className={classes.pageContent}>
                <UserRegistrationForm countries={countries} />
            </Paper>
        </>
    )
}
