import React from 'react';

import './App.css';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transaction from './transaction/Tansaction';
function App({ user, statistical, friendList, transform }) {
  return (
    <div>
      <Profile user={user} />
      <Statistics items={statistical} title="File upload" />
      <FriendList friends={friendList} />
      <Transaction itemsNew={transform} />
    </div>
  );
}

export default App;
