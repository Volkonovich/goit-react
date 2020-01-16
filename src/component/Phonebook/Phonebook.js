import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

export default class Phonebook extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}
