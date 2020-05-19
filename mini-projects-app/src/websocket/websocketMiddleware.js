import { SERVER_URL } from './websocketConstants';
import websocketReceiver from './websocketReceiver';

const socketMiddleware = () => {
  let socket = null;

  const onMessage = ({ dispatch }) => event => {
    websocketReceiver(dispatch, event);
  };

  return store => next => action => {
    switch (action.type) {
      case 'WS_CONNECT':
        console.log('attempting to connect to backend at', SERVER_URL);

        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(SERVER_URL);

        // websocket handlers
        socket.onmessage = onMessage(store);

        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
