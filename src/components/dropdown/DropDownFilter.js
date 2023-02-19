import { useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useDataContext } from '../../hooks/use-data-context';

const DropDownFilter = ({ data, filterType }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { searchTermHandler, queryHandler } = useDataContext();

  const removeDuplicates = new Set(
    data.map(item =>
      filterType === 'name'
        ? `${item.firstName} ${item.lastName} ${item.maidenName}`
        : item[filterType]
    )
  );
  const options = [...removeDuplicates].map((item, index) => (
    <MenuItem key={data[index].id} value={item}>
      {item}
    </MenuItem>
  ));

  const changeOptionHandler = ({ target: { value } }) => {
    setSelectedOption(value);
    let query = value;
    if (filterType === 'category') {
      query = `products/category/${value}`;
    } else if (filterType === 'title' || filterType === 'brand') {
      query = `products/search?q=${value}`;
    } else if (filterType === 'name') {
      query = `users/search?q=${value.split(' ')[0]}`;
    } else if (filterType === 'email' || filterType === 'birthDate') {
      query = `users/search?q=${value}`;
    }

    queryHandler(query);
    searchTermHandler(value);
  };
  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth size="small">
        <InputLabel id={`${filterType}-label`}>
          {filterType.toUpperCase()}
        </InputLabel>
        <Select
          labelId={`${filterType}-label`}
          id={filterType}
          value={selectedOption}
          label={filterType.toUpperCase()}
          onChange={changeOptionHandler}
          size="small"
        >
          {options}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownFilter;
