import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

const StockDisplay = ({ symbol, prices }) => {
  const [color, setColor] = useState('gray');

  useEffect(() => {
    if (prices[1] === prices[0]) {
      //do nothing
      return;
    } else if (prices[1] < prices[0]) {
      setColor('red');
    } else {
      setColor('green');
    }
  });

  return (
    <div className="stock__container">
      <p className="stock__text" key="symbol">
        {symbol}
      </p>
      <div className={`stock__text--${color}`}>
        <>
          <p className="stock__text" key="price">
            {prices[1]}
          </p>
        </>
      </div>
    </div>
  );
};

export default StockDisplay;
