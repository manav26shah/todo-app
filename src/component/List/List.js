import {  Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import Title from '../Title';


const useStyle = makeStyles(theme =>({
  root: {
    width: "300px",
    background: "#EBECF0",
    marginLeft: "20px",
  }
}));

export const List = () => {
  const classes = useStyle();
  return (
    <div>
     
        <Paper className={classes.root}>
         <Title />
        </Paper>

    </div>
  )
}
