import React from 'react';
import { Box, Stack, Button, ButtonGroup, TextField, InputAdornment, Snackbar, Alert } from "@mui/material"

export default function InputTextField(props) {

  function onInputChanged(e) {
    props.setValue(e.target.value);
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', m: 1, p: 0 }}>
      <TextField
        label="Name1"
        value={props.value}
        onChange={onInputChanged}
        id="outlined-start-adornment"
        sx={{ width: '70%', m: 0, p: 0, backgroundColor: "#121212" }}
        autoComplete='new-password' // To prevent autocomplete
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
      />

      <ButtonGroup sx={{
        height: "80%",
        width: "25%",
        m: "auto"
      }} variant="contained" aria-label="outlined primary button group">
        <Button>+1</Button>
        <Button>+5</Button>
      </ButtonGroup>
    </Box >
  );

}