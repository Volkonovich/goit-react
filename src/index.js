import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import statistical from './statisticData.json';

import App from './component/App';

console.log(statistical);

ReactDOM.render(
  <App user={user} statistical={statistical} />,
  document.getElementById('root'),
);
