import React from 'react';
import { Grid, Box } from '@mui/material';
import DropDownPerPage from '../dropdown/DropDownPerPage';
import SearchIcon from '../search/SearchIcon';
import DropDownFilter from '../dropdown/DropDownFilter';
import { useDataContext } from '../../hooks/use-data-context';
import { useLocation } from 'react-router-dom';

const FilterGrid = () => {
  const location = useLocation();
  const { users, products } = useDataContext();

  return (
    <>
      <Grid
        sx={{ m: 'auto', margin: '1rem 0' }}
        container
        spacing={{ xs: 3, sm: 6, md: 1 }}
      >
        <Grid item sm={1} md={1}>
          <DropDownPerPage />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          item
          sm={6}
          md={3}
        >
          <SearchIcon />
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 3, sm: 6, md: 1 }}>
        {location.pathname === '/users' ? (
          <>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={users} filterType="name" />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={users} filterType="email" />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={users} filterType="birthDate" />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={users} filterType="gender" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={products} filterType="title" />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={products} filterType="brand" />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <DropDownFilter data={products} filterType="category" />
            </Grid>
          </>
        )}{' '}
      </Grid>
    </>
  );
};

export default FilterGrid;
