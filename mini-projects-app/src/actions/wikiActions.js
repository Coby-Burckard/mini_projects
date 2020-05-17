import { fetchWikiParagraph } from '../AJAX/scrapeWiki';

const setWikiParagraph = (queryWord, paragraph) => ({
  type: 'SET_WIKI_PARAGRAPH',
  entry: [queryWord, paragraph],
});

const setWikiError = err => ({
  type: 'SET_WIKI_ERROR',
  err,
});

const setWikiSearching = searching => ({
  type: 'SET_WIKI_SEARCHING',
  searching,
});

const startWikiScrape = queryWord => async dispatch => {
  dispatch(setWikiSearching(true));

  const response = await fetchWikiParagraph(queryWord);
  const body = await response.json();

  switch (body.type) {
    case 'err':
      dispatch(setWikiError(body.payload));
      break;
    case 'valid':
      dispatch(setWikiParagraph(queryWord, body.payload));
      break;
    default:
      dispatch(setWikiError('error', 'unreadable response from server'));
      break;
  }

  dispatch(setWikiSearching(false));
};

export { startWikiScrape };
