import React from 'react';
import { SearchFormContainer, SearchFormInput } from '../Utils/Styles/SearchForm';

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <SearchFormInput 
        type="text" 
        placeholder='Search for places...' 
      />
    </SearchFormContainer>
  );
};

export default SearchForm;