import React from 'react';
import { Box, Button } from "@mui/material"
import SvgIcon from '@mui/material/SvgIcon';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import InputTextField from '../../components/inputs/TextField';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function PageCreateTab() {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  return (
    <Box sx={{ m: 0 }} className="">


      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Item>
          <InputTextField />
          <InputTextField />
          <InputTextField />
          <InputTextField />
        </Item>
        <Item>Item 2</Item>
        <Item >Item 3</Item>
        <InputTextField />
        <InputTextField />
      </Stack>

      <Button
        onClick={handleClick()}
        variant="contained"
        color="info"
        sx={{ width: '70%', mt: 5 }}
      >
        Add tracking tab
      </Button>

    </Box >
  );

}