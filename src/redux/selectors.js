import {createSelector} from '@reduxjs/toolkit'

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

// export const selectVisibleContacts = state => {
//     const contacts = selectContacts(state);
//     const filter = selectFilter(state);
//     return contacts.filter(({ name }) => name.toLowerCase().includes(filter))
// };
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  [selectContacts, selectFilter],
  [selectContacts, selectFilter],

 
(contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);