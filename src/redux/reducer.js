import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addContact, deleteContact, editContact } from "./actions";
import { toast } from 'react-toastify';

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, {payload}) => {
    console.log(state)
    if (
      state.items.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          payload.name.toLowerCase().trim()
      )
    ) {
      return toast.error(`${payload.name} is already in the contacts.`);
    }
    // return [payload, ...state];
        state.items.push(payload);
  },
//   [deleteContact]: (state, {payload}) => {
//     return state.items.filter(item => item.id !== payload);
//   },
//   [editContact]: (state, {payload}) => {
//     state.items.map(item => {
//         if (item.id === payload.id) {
//             return { ...item, ...payload };
//         }
//         return item;
//       })
//   }
  
})