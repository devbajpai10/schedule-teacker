import React from 'react';
import { Box, Button } from "@mui/material"
import SvgIcon from '@mui/material/SvgIcon';


export default function PageLanding() {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  return (
    <Box sx={{ m: 0, width: '100%', height: '100vh', backgroundColor: 'red' }} className="main">

      {/* Add task icon */}
      <SvgIcon sx={{ fontSize: '10rem', opacity: 0.8, mb: 2 }}>
        <path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c1.57,0,3.04,0.46,4.28,1.25l1.45-1.45C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.73,0,3.36-0.44,4.78-1.22 l-1.5-1.5C14.28,19.74,13.17,20,12,20z M19,15h-3v2h3v3h2v-3h3v-2h-3v-3h-2V15z" />
      </SvgIcon>

      <Box>
        You have no tracking tabs, click below to create your first!
      </Box>

      <Button
        onClick={handleClick()}
        variant="contained"
        color="info"
        sx={{
          width: '70%',
          mt: 5,
          position: 'sticky',
          bottom: 0,

        }}
      >
        Add tracking tab
      </Button>

    </Box >
  );

}