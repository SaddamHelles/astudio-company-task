import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchIconMU from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const SearchIcon = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: '120px',
      }}
    >
      <div onClick={() => setSearchToggle(!searchToggle)}>
        <SearchIconMU sx={{ cursor: 'pointer' }} />
      </div>
      {searchToggle && <SearchInput />}
    </Box>
  );
};

export default SearchIcon;
