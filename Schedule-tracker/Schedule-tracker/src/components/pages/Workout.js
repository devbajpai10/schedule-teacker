import React from 'react';
import { Box, Stack, Button, ButtonGroup, TextField, InputAdornment, Snackbar, Alert } from "@mui/material"

function DefaultInput(props) {

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
        sx={{ width: '70%', m: 0, p: 0 }}
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

export default function PageWorkout() {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const [weight1, setWeight1] = React.useState(0);
  const [weight2, setWeight2] = React.useState(0);
  const [weight3, setWeight3] = React.useState(0);

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  };

  const handleClear = (e) => {
    setWeight1(0);
  };

  return (
    <Box sx={{ m: 0 }} className="main">

      {/* Input fields */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', m: 0, p: 0 }}>
        {/* <DefaultInput value={weight1} setValue={setWeight1} /> */}
        <DefaultInput value={weight2} setValue={setWeight2} />
        <DefaultInput value={weight3} setValue={setWeight3} />
      </Box>

      {/* Clear and Save buttons */}
      <Stack direction="row" spacing={3} sx={{ m: 2, width: '95%' }}>
        <Button variant="contained" color="warning" onClick={handleClear} sx={{ width: '50%' }}>Clear</Button>

        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'center',
          })}
          variant="contained"
          color="info"
          sx={{ width: '50%' }}
        >
          Save
        </Button>
      </Stack>

      {/* Edit Tracking Tab and View All Data buttons */}
      <Stack direction="row" spacing={3} sx={{ m: 2, width: '95%' }}>
        <Button variant="contained" color="warning" onClick={handleClear} sx={{ width: '50%' }}>Edit Tab</Button>

        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'center',
          })}
          variant="contained"
          color="info"
          sx={{ width: '50%' }}
        >
          View All Data
        </Button>
      </Stack>

      <Snackbar
        sx={{ width: '50%' }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          New workout data saved!
        </Alert>
      </Snackbar>

    </Box >
  );

}