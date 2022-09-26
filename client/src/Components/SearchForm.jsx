import React, { useEffect } from 'react';
import { SearchFormContainer, 
        SearchFormInput,
        SearchFormInputContainer, 
        SearchResultContainer, 
        SearchResultContent 
      } from '../Utils/Styles/SearchForm';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { getLocation } from '../Utils/API';

const SearchForm = () => {
  const [ word, setWord ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);

  const handleWords = (e) => {
    e.preventDefault();
    setWord(e.target.value);
  };

  useEffect(() => {
    if(!word){
      setSearchResult([]);
      return;
    };

    const location = async () => {
      const data = await getLocation(word);
      setSearchResult(data);
    };
    location();
  },[word]);

  return (
    <SearchFormContainer>
      <SearchFormInputContainer>
        <SearchFormInput 
          onChange={(e) => handleWords(e)}
          type="text" 
          placeholder='Search for places...'
        />
        <FiSearch />
      </SearchFormInputContainer>

      <SearchResultContainer>
          {searchResult && searchResult.map((result) => (
            <SearchResultContent 
              key={result._id}
            >
              {result.title}
            </SearchResultContent>
          ))}
      </SearchResultContainer>
    </SearchFormContainer>
  );
};

export default SearchForm;