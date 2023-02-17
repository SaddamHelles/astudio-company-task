import React, { Fragment, useState } from 'react';
import SearchInput from './SearchInput';
import SearchIconMU from '@mui/icons-material/Search';

const SearchIcon = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <Fragment>
      <div onClick={() => setSearchToggle(!searchToggle)}>
        <SearchIconMU sx={{ cursor: 'pointer' }} />
      </div>
      {searchToggle && <SearchInput />}
    </Fragment>
  );
};

export default SearchIcon;
