import React from "react";
import Feedback from "./feedback/Feedback";
import Reader from "./Reader/Reader";
import Phonebook from "./Phonebook/Phonebook";

const App = () => {
  return (
    <div className="App">
      <Feedback />
      <Reader />
      <Phonebook />
    </div>
  );
};
export default App;
