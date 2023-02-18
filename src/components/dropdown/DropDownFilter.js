import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useDataContext } from '../../hooks/use-data-context';

const DropDownFilter = ({ data, filterType }) => {
  const { searchTerm, searchTermHandler } = useDataContext();
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
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="pages-select-label">{filterType}</InputLabel>
        <Select
          labelId="pages-select-label"
          id="pages-select"
          value={searchTerm}
          label="Pages"
          onChange={e => {
            console.log('AAAAAAAAAAAAA: ', e.target.value);
            searchTermHandler(e.target.value);
          }}
        >
          {options}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownFilter;
