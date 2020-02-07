interface EntryObject {
  id: number;
  title: string;
  body: string;
  date: string;
  userId: number;
}

export interface EntryState {
  entries: Array<EntryObject>;
}

export const ENTRIES = {
  FETCH_SUCCESS: "ENTRIES_FETCH_SUCCESS",
  FETCH_ERROR: "ENTRIES_FETCH_ERROR",
  ADD: "ADD",
  EDIT: "EDIT",
  REMOVE: "REMOVE",
  GETBYID: "GETBYID"
};

interface FetchSuccessAction {
  type: typeof ENTRIES.FETCH_SUCCESS;
  payload: EntryState;
}

interface FetchErrorAction {
  type: typeof ENTRIES.FETCH_ERROR;
  payload: EntryState;
}

interface AddAction {
  type: typeof ENTRIES.ADD;
  payload: EntryState;
}

interface EditAction {
  type: typeof ENTRIES.EDIT;
  payload: EntryState;
}

interface RemoveAction {
  type: typeof ENTRIES.REMOVE;
  payload: EntryState;
}

interface GetByIdAction {
  type: typeof ENTRIES.GETBYID;
  payload: EntryState;
}

export type EntryActionTypes =
  | FetchSuccessAction
  | FetchErrorAction
  | AddAction
  | EditAction
  | RemoveAction
  | GetByIdAction;
