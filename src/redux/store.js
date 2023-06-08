import { configureStore} from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
// import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./reducer";



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filters: filtersReducer,
  },
});