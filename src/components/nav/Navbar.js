import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CustomLink from '../custom/CutsomLink';
import { Button, Toolbar } from '@mui/material';
import { COLORS } from '../../style/constants/colors';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1rem' }}>
      <AppBar style={{ backgroundColor: COLORS.blackColor }} position="static">
        <Toolbar>
          <Button color="inherit">
            <CustomLink to={'/'}>Home</CustomLink>
          </Button>
          <Button color="inherit">
            <CustomLink to={'/users'}>Users</CustomLink>
          </Button>
          <Button color="inherit">
            <CustomLink to={'/products'}>Products</CustomLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
