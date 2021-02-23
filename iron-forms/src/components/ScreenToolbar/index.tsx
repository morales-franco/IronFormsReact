import { Card, Typography } from '@material-ui/core';
import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Props } from './types';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(1),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))


export const ScreenToolbar : React.FC<Props> = ( { icon, title, subTitle }) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}
