import { ClearOutlined } from '@mui/icons-material'
import { Button, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(theme =>({
  card:{
    width: "250px", 
    padding: "10px 10px 10px 20px",
    margin: "0px 10px 10px 10px",
    borderColor: "primary .secondary",
  },
  input:{
    margin: "10px",
  },
  Confirm: {
    margin: "0px 10px 10px 10px",
  }
}));


const InputCard = ({ setOpen }) => {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
        <InputBase
          multiline
          onBlur={() => setOpen(false)}
          fullWidth
          inputProps={
            {classes: classes.input,}
          }
          placeholder='Type here'
        />
        </Paper>
      </div>
      <div className={ classes.Confirm }>
        <Button variant='contained' onClick={() => setOpen(false) }>
          Add Card
        </Button>
        <IconButton onClick={() => setOpen(false) }>
          <ClearOutlined />
        </IconButton>
      </div>
    </div>
  )
}

export default InputCard
