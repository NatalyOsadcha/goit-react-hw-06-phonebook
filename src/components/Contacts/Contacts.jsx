import React from 'react';
import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';

const Contacts = () => {

  const { contacts } = useSelector(contactsSelector)
  console.log(contactsSelector)
  console.log(contacts)
  
  return <ul className={css.contactsList}>
    {contacts.map(contact => (
      <ContactsItem
        key={contact.id}
        contact={contact}
      />
    ))}
  </ul>
}

;

Contacts.protoTypes = {
  editContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      contact: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
};

export default Contacts;
