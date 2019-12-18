import React from 'react';

import './App.css';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

function App(props) {
  console.log(props);
  return (
    <div>
      <Profile user={props.user} />
      <Statistics items={props.statistical} title="File upload" />
    </div>
  );
}

export default App;
