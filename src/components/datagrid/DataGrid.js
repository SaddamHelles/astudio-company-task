import * as React from 'react';
import { Box, Pagination, Typography } from '@mui/material';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import ContainerDataGrid from '../custom/ContainerDataGrid';
import { COLORS } from '../../style/constants/colors';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      style={{
        backgroundColor: COLORS.blueColor,
        borderRadius: '5px',
      }}
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function CustomPaginationGrid({ data, perPages }) {
  if (!data.length) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">No Data Found!</Typography>
      </Box>
    );
  }
  const headerTitles = Object.keys(data[0]).map(key => ({
    field: key,
    headerName: key.toUpperCase(),
    minWidth: 100,
    flex: 1,
  }));
  headerTitles.shift();
  return (
    <ContainerDataGrid>
      <DataGrid
        pagination
        pageSize={perPages}
        rowsPerPageOptions={[perPages]}
        components={{
          Pagination: CustomPagination,
        }}
        columns={headerTitles}
        rows={data}
      />
    </ContainerDataGrid>
  );
}
