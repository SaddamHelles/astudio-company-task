import React from 'react';
import { Box } from '@mui/material';
import { COLORS } from '../../style/variables/colors';

const ContainerDataGrid = ({ children }) => {
  return (
    <Box
      sx={{
        height: 400,
        margin: '1rem 0',
        '.MuiDataGrid-columnSeparator': {
          color: COLORS.blackColor,
        },
        '.MuiDataGrid-columnHeader ': {
          backgroundColor: COLORS.blueColor,
        },
        '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
          backgroundColor: COLORS.yellowColor,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerDataGrid;
