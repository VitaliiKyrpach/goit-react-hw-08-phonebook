import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';
export const contReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
