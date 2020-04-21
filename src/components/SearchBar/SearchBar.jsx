import React from 'react';
import T from 'prop-types';
import SearchForm from './SearchForm';

const SearchBar = ({ updateQuery }) => (
  <header className="search-bar">
    <SearchForm updateQuery={updateQuery} />
  </header>
);

SearchBar.propTypes = {
  updateQuery: T.func.isRequired,
};

export default SearchBar;
