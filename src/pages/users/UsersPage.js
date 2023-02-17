import React from 'react';
import { useDataContext } from '../../hooks/use-data-context';
import DataGrid from '../../components/datagrid/DataGrid';

const UsersPage = () => {
  const { users, perPages } = useDataContext();
  return (
    <div>{users.length && <DataGrid data={users} perPages={perPages} />}</div>
  );
};

export default UsersPage;
