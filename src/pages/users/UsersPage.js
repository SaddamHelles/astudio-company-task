import React, { useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';
import { Box, CircularProgress } from '@mui/material';

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
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  return <DataGrid data={filteredUsers} perPages={perPages} />;
};

export default UsersPage;
