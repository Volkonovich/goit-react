import React from "react";
import PropTypes from "prop-types";
const ContactList = ({ contacts = [], deleteContacts }) => {
  // console.log("deleteContacts", deleteContacts);
  return (
    <>
      {contacts.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button type="button" onClick={() => deleteContacts(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  deleteContacts: PropTypes.func
};
