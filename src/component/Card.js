import { Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(theme =>({
  card:{
    padding: "10px 10px 10px 20px",
    margin: "10px",
  }
}));

const Card = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.card}>
        Making something, wanna eat?
      </Paper>
    </div>
  )
}

export default Card
