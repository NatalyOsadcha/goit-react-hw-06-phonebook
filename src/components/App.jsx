import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  //   );
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
      <Filter />
      <Contacts/>
      <ToastContainer autoClose={2000} />
    </>
  );
}
