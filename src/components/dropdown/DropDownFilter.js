import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useDataContext } from '../../hooks/use-data-context';

const DropDownFilter = ({ data, filterType }) => {
  const { searchTerm, searchTermHandler, queryHandler } = useDataContext();
  const removeDuplicates = new Set(
    data.map(item =>
      filterType === 'name'
        ? `${item.firstName} ${item.lastName} ${item.maidenName}`
        : item[filterType]
    )
  );
  const options = [...removeDuplicates].map((item, index) => (
    <MenuItem key={index} value={item}>
      {item}
    </MenuItem>
  ));

  const changeOptionHandler = ({ target: { value } }) => {
    if (filterType === 'category') {
      queryHandler(`products/category/${value}`);
    } else if (filterType === 'title' || filterType === 'brand') {
      queryHandler(`products/search?q=${value}`);
    } else if (filterType === 'name') {
      queryHandler(`users/search?q=${value.split(' ')[0]}`);
    } else if (filterType === 'email' || filterType === 'birthDate') {
      queryHandler(`users/search?q=${value}`);
    }

    searchTermHandler(value);
  };
  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="pages-select-label">
          {filterType.toUpperCase()}
        </InputLabel>
        <Select
          labelId="pages-select-label"
          id="pages-select"
          value={searchTerm}
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
