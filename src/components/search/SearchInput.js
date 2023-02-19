import { TextField } from '@mui/material';
import { useDataContext } from '../../hooks/use-data-context';

const SearchInput = () => {
  const { searchTermHandler, searchTerm } = useDataContext();
  return (
    <div>
      <TextField
        type="text"
        value={searchTerm}
        onChange={e => searchTermHandler(e.target.value)}
        placeholder="Search"
        autoFocus
        size="small"
      />
    </div>
  );
};

export default SearchInput;
