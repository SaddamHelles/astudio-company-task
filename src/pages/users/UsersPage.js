import React, { useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';
import filterData from '../../utils/filterData';

const UsersPage = () => {
  const { users, perPages, fetchUsers, searchTerm } = useDataContext();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  let filteredUsers = users;
  if (searchTerm) {
    filteredUsers = filterData(users, searchTerm);
  }
  return <DataGrid data={filteredUsers} perPages={perPages} />;
};

export default UsersPage;
