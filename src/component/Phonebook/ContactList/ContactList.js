import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
const ContactList = ({ contacts = [], deleteContacts }) => {
  return (
    <>
      {contacts.length !== 0 &&
        contacts.map(item => (
          <div key={shortid()}>
            {console.log("object", item)}
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
