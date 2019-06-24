import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {allContacts.map(contact => (
          <CSSTransition key={contact.id} timeout={1000} classNames='item'>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
