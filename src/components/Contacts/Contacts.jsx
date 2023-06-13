import React from 'react';
import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';
// import { getFilteredContacts } from 'redux/contactsSlice';

const Contacts = () => {
  const { filterCont } = useSelector(filterSelector);
  console.log(useSelector(filterSelector));

  const { contacts } = useSelector(contactsSelector)
  console.log(contacts)

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
    console.log(filterCont)
      // contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  const filteredContacts = getFilteredContacts();
  return <ul className={css.contactsList}>
    {filteredContacts.map(contact => (
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
