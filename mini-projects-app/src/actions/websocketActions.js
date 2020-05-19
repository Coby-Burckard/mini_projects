const wsSend = payload => ({
  type: 'WS_SEND',
  payload,
});

const wsConnect = () => ({
  type: 'WS_CONNECT',
});

export { wsSend, wsConnect };
