import React, { useRef, useEffect, useContext } from "react";
import ContactContext from "../../contexts/contact/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filteredContacts } = useContext(
    ContactContext
  );
  const text = useRef("");

  useEffect(() => {
    if (filteredContacts === null) {
      text.current.value = "";
    }
  }, [filterContacts]);

  const handleChange = () => {
    const value = text.current.value;
    if (value === "") {
      clearFilter();
    } else {
      filterContacts(value);
    }
  };

  return (
    <form>
      <input
        type='text'
        name='text'
        placeholder='Filter contacts...'
        ref={text}
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactFilter;
