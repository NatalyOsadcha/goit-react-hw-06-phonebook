import React from 'react';
import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';

const Contacts = () => {
  const filterValue = useSelector(filterSelector);
  const { contacts } = useSelector(contactsSelector);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default Contacts;
