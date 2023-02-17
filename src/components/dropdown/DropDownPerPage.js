import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useDataContext } from '../../hooks/use-data-context';

export default function BasicSelect() {
  const { perPagesHandler, perPages } = useDataContext();

  const handleChange = event => {
    perPagesHandler(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="pages-select-label">Pages</InputLabel>
        <Select
          labelId="pages-select-label"
          id="pages-select"
          value={perPages}
          label="Pages"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
