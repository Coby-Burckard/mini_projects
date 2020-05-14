import moment from 'moment';
import { fetchNASAAPODImage } from '../AJAX/fetchNASAAPOD';

const startLoadImages = () => {
  return async dispatch => {
    //loading 5 images
    for (let i = 0; i < 5; i++) {
      console.log('sending request');
      const today = moment().subtract(i, 'days').format('YYYY-MM-DD');
      const image = await fetchNASAAPODImage(today);
      dispatch(addImage(image.url));
    }
  };
};

const addImage = imageURL => ({
  type: 'ADD_IMAGE',
  imageURL,
});

export { startLoadImages };
