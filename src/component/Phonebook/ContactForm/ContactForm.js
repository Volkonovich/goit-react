import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactList from "../ContactList/ContactList";
import shortid from "shortid";
import Filter from "../Filter/Filter";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filteredContacts: [],
    searchValue: ""
  };

  componentDidMount() {
    const [local] = JSON.parse(localStorage.getItem("contacts"));
    // localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, local]
      };
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      console.log(prevState.contacts.length, this.state.contacts.length);
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleInputChangeName = event => {
    const name = event.target.value;
    if (event.target.value.length < 0) {
      return;
    }
    this.setState({
      name: name
    });
  };

  handleInputChangeNumber = event => {
    const number = event.target.value;
    console.log("event.target.value", event.target.value);
    this.setState({
      number: number
    });
  };

  onHandleArray = e => {
    if (this.state.name !== "" && this.state.number !== "") {
      const obj = {
        name: this.state.name,
        number: this.state.number,
        id: shortid.generate()
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, obj],
        name: "",
        number: ""
      }));
    }
  };

  getInputValue = e => {
    const value = e.target.value;
    this.setState({
      searchValue: value
    });
  };

  getFilteredContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });
    return filteredContacts;
  };

  deleteContacts = id => {
    console.log("id", id);
    const contacts = this.state.contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contacts
    });
  };

  render() {
    let contacts = [];
    this.state.searchValue !== ""
      ? (contacts = this.getFilteredContacts())
      : (contacts = this.state.contacts);
    return (
      <>
        <p>Name</p>
        <input
          value={this.state.name}
          className="ForName"
          type="text"
          onChange={this.handleInputChangeName}
          placeholder="Name"
        ></input>
        <p>Number</p>
        <input
          value={this.state.number}
          className="SurName"
          type="text"
          onChange={this.handleInputChangeNumber}
          placeholder="Number"
        ></input>
        <button name="Add contact" type="button" onClick={this.onHandleArray}>
          add
        </button>
        <br />
        <h2>Contacts</h2>
        <Filter
          getInputValue={this.getInputValue}
          searchValue={this.state.searchValue}
        />
        <ContactList contacts={contacts} deleteContacts={this.deleteContacts} />
      </>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  contact: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string
};
