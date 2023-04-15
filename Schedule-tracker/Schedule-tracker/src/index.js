import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import AppTabs from './components/AppTabs.js';
import PageWorkout from './components/pages/Workout';
import PageSleep from './components/pages/Sleep';
import PageLanding from './components/pages/Landing';
import PageCreateTab from './components/pages/CreateTab';

import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const allTabs = [];

  return (
    <>
      <ResponsiveAppBar />
      <AppTabs
        showLandingTab={!allTabs.length}
        tabLanding={<PageLanding />}
      // tabWorkout={<PageWorkout />}
      // tabSleep={<PageSleep />}
      // tabNotes={<h1>testNotes</h1>}
      />
    </>
  );

}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);