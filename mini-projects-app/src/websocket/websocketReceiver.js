import { setStocks } from '../actions/stockActions';

export default (dispatch, event) => {
  let data;

  // validating data
  if (event.data) {
    data = JSON.parse(event.data);

    data.forEach(stock => {
      if (!stock.symbol || !stock.prices) {
        console.log('Error: invalid data from stock API');
        return;
      }
    });
  } else {
    console.log('Error: no data from stock API');
    return;
  }

  //sending data to redux
  console.log(data);
  dispatch(setStocks(data));
};
