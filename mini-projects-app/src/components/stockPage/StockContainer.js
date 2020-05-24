import React from 'react';
import { useSelector } from 'react-redux';
import StockDisplay from './StockDisplay';

const StockContainer = () => {
  const { stocks } = useSelector(state => state.stock);
  return (
    <div className="stocks__container">
      <p className="stocks__paragraph">
        Data will be slow outside market hours <br></br> (M-F 9:30 AM - 4:00 PM
        EST)
      </p>
      <div className="stocks__sub-container">
        {stocks.map(stock => {
          return <StockDisplay {...stock} />;
        })}
      </div>
    </div>
  );
};

export default StockContainer;
