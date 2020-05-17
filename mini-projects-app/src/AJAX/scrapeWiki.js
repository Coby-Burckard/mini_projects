import { url } from './AJAXConstants';

const fetchWikiParagraph = queryWord => {
  const encodedQueryWord = encodeURI(queryWord);

  return fetch(`${url}/wiki/${encodedQueryWord}`, {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { fetchWikiParagraph };
