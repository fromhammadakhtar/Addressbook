import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './Search.scss';

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const SearchComponent = (props: SearchComponentProps) => {
  const { onSearch } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleBlur = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='search-container'>
      <TextField
        label='Search contacts...'
        variant='outlined'
        color='secondary'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <SearchIcon
              style={{ cursor: 'pointer' }}
              onClick={handleSearch}
              color='secondary'
            />
          ),
        }}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchComponent;
