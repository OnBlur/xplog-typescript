import { EntryState, EntryObject, ENTRIES, EntryActionTypes } from "./types";
import { store } from "../../_helpers";

import API from "../api";

export const fetchEntries = async () => {
  try {
    const response = await API.get(`posts`);
    return store.dispatch(fetchEntriesSuccess(response.data));
  } catch (error) {
    return store.dispatch(fetchEntriesError(error));
  }
};

export function fetchEntriesSuccess(data: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.FETCH_SUCCESS,
    payload: data
  };
}

export function fetchEntriesError(errorMessage: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.FETCH_SUCCESS,
    payload: errorMessage
  };
}

export function addEntry(data: EntryObject): EntryActionTypes {
  return {
    type: ENTRIES.ADD,
    payload: data
  };
}

export function editEntry(data: EntryObject): EntryActionTypes {
  return {
    type: ENTRIES.EDIT,
    payload: data
  };
}

export function removeEntry(data: EntryObject): EntryActionTypes {
  return {
    type: ENTRIES.REMOVE,
    payload: data
  };
}

export function getEntryById(id: EntryState): EntryActionTypes {
  return {
    type: ENTRIES.GETBYID,
    payload: id
  };
}
