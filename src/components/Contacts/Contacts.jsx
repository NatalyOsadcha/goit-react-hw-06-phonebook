import React from 'react';
import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { deleteContact, editContact } from 'redux/actions';


const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactsSelector)
  
  return <ul className={css.contactsList}>
    {contacts.map(contact => (
      <ContactsItem
        key={contact.id}
        contact={contact}
        onDeleteContact={dispatch(deleteContact())}
        editContact={dispatch(editContact())}
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
