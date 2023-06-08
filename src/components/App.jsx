import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {addContact, deleteContact} from '../redux/actions'
import { contactsSelector, filterSelector } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  // const { contacts } = useSelector(contactsSelector)
  // const { filter } = useSelector(filterSelector)

 

  
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   if (
  //     contacts.some(
  //       contact =>
  //         contact.name.toLowerCase().trim() ===
  //         newContact.name.toLowerCase().trim()
  //     )
  //   ) {
  //     return toast.error(`${newContact.name} is already in the contacts.`);
  //   }
  //   setContacts(state => {
  //     return [newContact, ...state];
  //   });
  // };

  // const changeFilter = evt => {
  //   setFilter(evt.target.value);
  // };

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  //   );
  // };

  // const deleteContact = id => {
  //   setContacts(state => state.filter(contact => contact.id !== id));
  // };

  // const editContact = contact => {
  //   setContacts(prevContacts =>
  //     prevContacts.map(el => {
  //       if (el.id === contact.id) {
  //         return contact;
  //       }
  //       return el;
  //     })
  //   );
  // };
  // const filteredContacts = getFilteredContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm/>
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Contacts
        // contacts={filteredContacts}
        onDeleteContact={deleteContact}
        // editContact={editContact}
      />
      <ToastContainer autoClose={2000} />
    </>
  );
}
