import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { wsConnect } from '../../actions/websocketActions';
import StockContainer from './StockContainer';
import TitleBlock from '../page/TitleBlock';

const StockPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div>
      <TitleBlock title="Stock Websockets">
        <p className="modal__p">
          A full stack mini project. The node + ws backend establishes a
          websocket connection with{' '}
          <a className="modal__link" href="https://finnhub.io/">
            Finnhub
          </a>{' '}
          to receive real time trade data. A node + express + ws web socket
          server is also hosted on the backend for the client to connect to. The
          most recent trade data is pushed to the frontend in one second
          intervals.
        </p>
      </TitleBlock>
      <StockContainer />
    </div>
  );
};

export default StockPage;
