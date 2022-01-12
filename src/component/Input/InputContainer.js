import { Collapse, Fade, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import InputCard from './InputCard';

const useStyle = makeStyles(theme =>({
  root:{
    marginTop: "20px",
  },
  addCard:{
    padding: "10px 10px 10px 20px",
    margin: "0px 10px 10px 10px",
    backgroundColor: '#C0C0C0',
    '&:hover':{
      backgroundColor: Fade,
    }
  }
}));

const InputContainer = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in = {open}>
        <InputCard setOpen={setOpen}/>
      </Collapse>
      <Collapse in = {!open}>
        <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
          <Typography>+ Add a Card</Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default InputContainer;
