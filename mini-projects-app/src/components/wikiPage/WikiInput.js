import React, { useState } from 'react';
import { startWikiScrape } from '../../actions/wikiActions';
import { useDispatch } from 'react-redux';

const WikiPage = () => {
  const dispatch = useDispatch();

  const [queryWord, setQueryWord] = useState('');

  const handleWordChange = e => {
    setQueryWord(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!!queryWord) {
      dispatch(startWikiScrape(queryWord));
      setQueryWord('');
    }
  };

  return (
    <div className="wiki__form-container">
      <form className="wiki__form" onSubmit={handleFormSubmit}>
        <input
          className="wiki__input"
          value={queryWord}
          onChange={handleWordChange}
          placeholder="key word"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default WikiPage;
