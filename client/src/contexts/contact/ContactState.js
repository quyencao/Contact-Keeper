import React, { useReducer } from "react";
import uuid from "uuid/v4";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Quyen",
        email: "quyen@gmail.com",
        phone: "333-333-333",
        type: "personal"
      },
      {
        id: 2,
        name: "hung",
        email: "hung@gmail.com",
        phone: "999-999-999",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    const newContact = { ...contact, id: uuid() };
    dispatch({ type: ADD_CONTACT, payload: newContact });
  };

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter Contact

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
