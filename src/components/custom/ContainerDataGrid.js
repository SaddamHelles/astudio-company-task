import React from 'react';
import { Box } from '@mui/material';

const ContainerDataGrid = ({ children }) => {
  return (
    <Box
      sx={{
        height: 400,
        margin: '1rem 0',
        '.MuiDataGrid-columnSeparator': {
          color: '#322625',
        },
        '.MuiDataGrid-columnHeader ': {
          backgroundColor: '#c0e3e5',
        },
        '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#fdc936',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerDataGrid;
