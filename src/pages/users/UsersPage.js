import React, { useEffect } from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';

const UsersPage = () => {
  const { users, perPages, fetchUsers } = useDataContext();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return <DataGrid data={users} perPages={perPages} />;
};

export default UsersPage;
