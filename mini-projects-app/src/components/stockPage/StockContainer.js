import React from 'react';
import { useSelector } from 'react-redux';
import StockDisplay from './StockDisplay';

const StockContainer = () => {
  const { stocks } = useSelector(state => state.stock);
  return (
    <div className="stocks__container middle">
      {stocks.map(stock => {
        return <StockDisplay {...stock} />;
      })}
    </div>
  );
};

export default StockContainer;
