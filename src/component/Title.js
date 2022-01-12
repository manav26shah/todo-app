import { InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { MoreHoriz } from '@mui/icons-material';

const useStyle = makeStyles(theme =>({
  editableTitleContainer:{
    margin: "10px", 
    display: "flex",
  },
  editableTitle:{
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input:{
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px", 
    padding: "10px",
    "&:focus":{
      background:"#ddd",
    }
  }
}));  

const Title = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div>
      {open?(
        <div>
          <InputBase 
            autoFocus
            value=" todo"
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ):
        <div className={classes.editableTitleContainer}>
          <Typography onClick={()=>setOpen(!open)} className={classes.editableTitle}>
            Todo
          </Typography>
          <MoreHoriz />
        </div>
      }
    </div>
  )
}

export default Title;
