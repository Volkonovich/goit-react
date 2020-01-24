import React, { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Phonebook />
      </div>
    );
  }
}
