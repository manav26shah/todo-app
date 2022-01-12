import { Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import Title from '../Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';


const useStyle = makeStyles(theme =>({
  root: {
    width: "300px",
    background: "#C0C0C0",
    marginLeft: "20px",
  }
}));

export const List = () => {
  const classes = useStyle();
  return (
    <div>
        <Paper className={classes.root}>
         <Title />
         <Card />
         <Card />
         <InputContainer /> 
        </Paper>

    </div>
  )
}
