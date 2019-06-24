import React, { useReducer } from "react";
import uuid from "uuid";
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
        type: "Personal"
      },
      {
        id: 2,
        name: "hung",
        email: "hung@gmail.com",
        phone: "999-999-999",
        type: "Professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter Contact

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
