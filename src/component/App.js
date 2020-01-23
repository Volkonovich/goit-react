import React, { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import Gallery from "./Gallery/Gallary";
export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Gallery />
        {/* <Phonebook /> */}
      </div>
    );
  }
}
