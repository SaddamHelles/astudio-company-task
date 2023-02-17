import React from 'react';
import { Grid } from '@mui/material';
import DropDownPerPage from '../dropdown/DropDownPerPage';
import SearchIcon from '../search/SearchIcon';

const FilterGrid = () => {
  return (
    <Grid
      sx={{ m: 'auto', marginBottom: '1rem' }}
      container
      spacing={{ xs: 3, sm: 6, md: 1 }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <DropDownPerPage />
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        item
        xs={12}
        sm={6}
        md={4}
      >
        <SearchIcon />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        Third grid item
      </Grid>
    </Grid>
  );
};

export default FilterGrid;
