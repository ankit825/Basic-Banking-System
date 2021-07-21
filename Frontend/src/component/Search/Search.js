import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import background1 from '../Image/BG-Search-1800x1000-1.jpg';

const Search = () => {
  return (
    <div style={{ height: '577px' }}>
      <div
        id="Input"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundBlendMode: 'darken',
          backgroundColor: 'rgba(0,0,0,0.5)',
          backgroundSize: 'cover',
          height: '600px',
        }}
      >
        <div
          style={{
            left: '25%',
            top: '300px',
            position: 'absolute',
          }}
        >
          <input
            id="search"
            type="text"
            placeholder="Search for something"
            style={{ width: '700px', height: '50px' }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Search;
