import React, { useContext, Fragment } from "react";
import ContactContext from "../../contexts/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filteredContacts } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  const allContacts = filteredContacts ? filteredContacts : contacts;

  return (
    <Fragment>
      {allContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
