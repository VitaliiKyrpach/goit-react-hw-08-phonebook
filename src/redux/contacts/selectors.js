import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectUsers, selectFilter],
  (users, query) => {
    return users.filter(user => user.name.toLowerCase().includes(query));
  }
);
