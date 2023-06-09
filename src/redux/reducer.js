import { createReducer } from '@reduxjs/toolkit';
import { initialContactsState, initialFilterState} from './initialState';
import {
  addContact,
  deleteContact,
  //   editContact,
  filterContacts,
} from './actions';
import { toast } from 'react-toastify';

export const contactsReducer = createReducer(initialContactsState, {
  [addContact]: (state, { payload }) => {
    console.log(state.contacts);
    console.log(payload);
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
    [deleteContact]: (state, { payload }) => {
    return state.contacts.filter(contact => contact.id !== payload);
  },
  //   [editContact]: (state, {payload}) => {
  //     state.items.map(item => {
  //         if (item.id === payload.id) {
  //             return { ...item, ...payload };
  //         }
  //         return item;
  //       })
  //   }
});

export const filtersReducer = createReducer(initialFilterState, {
    [filterContacts]: (state, { payload }) => {
        console.log(payload)
        return payload
  },
});
