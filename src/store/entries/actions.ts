import { EntryState, ENTRIES, EntryActionTypes } from "./types";

import API from "../api";

export function fetchEntriesSuccess(
  successMessage: EntryState
): EntryActionTypes {
  return {
    type: ENTRIES.FETCH_SUCCESS,
    payload: successMessage
  };
}

export function fetchEntriesError(errorMessage: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.FETCH_SUCCESS,
    payload: errorMessage
  };
}

export function addEntry(data: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.ADD,
    payload: data
  };
}

export function editEntry(data: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.EDIT,
    payload: data
  };
}

export function removeEntry(id: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.REMOVE,
    payload: id
  };
}

export function getEntryById(id: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.GETBYID,
    payload: id
  };
}

//Fetching entries
// export const fetchEntries = () => dispatch => {
//   return API.get(`posts`, { mode: "cors" })
//     .then(response => {
//       if (response.status !== 200) {
//         throw new Error("Unsuccessful request to deckofcardsapi.com");
//       }
//       return response.data;
//     })
//     .then(data => dispatch(fetchEntriesSuccess(data)))
//     .catch(error => dispatch(fetchEntriesError(error)));
// };
