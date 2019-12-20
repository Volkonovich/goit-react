import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import statistical from './statisticData.json';
import friendList from './friends.json';
import transaction from './transaction.json';
import App from './component/App';

console.log(transaction);

ReactDOM.render(
  <App
    user={user}
    statistical={statistical}
    friendList={friendList}
    transform={transaction}
  />,
  document.getElementById('root'),
);
