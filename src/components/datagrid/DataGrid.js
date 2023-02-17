import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function CustomPaginationGrid({ data, perPages }) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        pagination
        pageSize={perPages}
        rowsPerPageOptions={[perPages]}
        components={{
          Pagination: CustomPagination,
        }}
        columns={Object.keys(data[0]).map(
          key =>
            key !== 'id' && {
              field: key,
              headerName: key.toUpperCase(),
            }
        )}
        rows={data}
      />
    </Box>
  );
}

/*
[
          { field: 'firstName', headerName: 'FIRST NAME' },
          { field: 'lastName', headerName: 'MAIDEN Name' },
          { field: 'maidenName', headerName: 'AGE' },
          { field: 'age', headerName: 'GENDER' },
          { field: 'gender', headerName: 'LAST NAME' },
          { field: 'email', headerName: 'EMAIL' },
          { field: 'username', headerName: 'USER NAME' },
          { field: 'bloodGroup', headerName: 'BLOOD GROUB' },
          { field: 'eyeColor', headerName: 'EYE COLOR' },
          { field: 'phone', headerName: 'PHONE' },
          { field: 'university', headerName: 'UNIVERSITY' },
          { field: 'city', headerName: 'CITY' },
          { field: 'image', headerName: 'IMAGE' },
        ]
*/
