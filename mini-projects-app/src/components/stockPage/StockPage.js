import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { wsConnect } from '../../actions/websocketActions';
import StockContainer from './StockContainer';

const StockPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div>
      <StockContainer />
    </div>
  );
};

export default StockPage;
