import React, { useState } from 'react';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
