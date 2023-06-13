import { createSlice } from '@reduxjs/toolkit';
import { initialContactsState } from './initialState';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact(state, { payload }) {
      if (
        state.contacts.some(
          contact =>
            contact.name.toLowerCase().trim() ===
            payload.name.toLowerCase().trim()
        )
      ) {
        toast.error(`${payload.name} is already in the contacts.`);
        return;
      }
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    editContact(state, actions) {},
  },
});

export const { addContact, deleteContact, editContact, getFilteredContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
