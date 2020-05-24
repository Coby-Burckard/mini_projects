import React from 'react';
import WikiInput from './WikiInput';
import WikiDisplay from './WikiDisplay';
import TitleBlock from '../page/TitleBlock';

const WikiPage = () => {
  return (
    <div className="wiki middle">
      <TitleBlock title="Scrape Wikipedia">
        <p className="modal__p">
          A full stack mini project. The Wikipedia Page for the user’s input is
          scraped, and the first paragraph is returned. Once the user submits
          their key word, a Node + Express REST API is fetched.{' '}
          <a
            className="modal__link"
            href="https://www.npmjs.com/package/osmosis"
          >
            Osmosis
          </a>{' '}
          is used to parse and scrape Wikipedia.
        </p>
      </TitleBlock>
      <WikiInput />
      <WikiDisplay />
    </div>
  );
};

export default WikiPage;
