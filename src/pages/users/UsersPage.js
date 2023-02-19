import React, { Fragment, useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';
import { Box, CircularProgress } from '@mui/material';
import FilterGrid from '../../components/filterGrid/FilterGrid';

const UsersPage = () => {
  const { users, perPages, fetchUsers, searchTerm, loading } = useDataContext();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  let filteredUsers = users;
  if (searchTerm) {
    filteredUsers = filterData(users, searchTerm);
  }

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: '6rem' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Fragment>
      <FilterGrid />
      <DataGrid data={filteredUsers} perPages={perPages} />
    </Fragment>
  );
};

export default UsersPage;
