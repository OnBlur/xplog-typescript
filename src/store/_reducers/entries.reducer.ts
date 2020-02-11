import {
  EntryState,
  EntryActionTypes,
  ENTRIES,
  EntryObject
} from "../entries/types";

const initialState: EntryState = {
  entries: [
    {
      id: 14302,
      title: "Why do we use it?",
      body:
        "It is a long established fact that a reader will be distracted by the readable content.",
      date: "7-feb-2020",
      userId: 213
    },
    {
      id: 22342,
      title: "Why do we use it?",
      body:
        "It is a long established fact that a reader will be distracted by the readable content.",
      date: "7-feb-2020",
      userId: 213
    },
    {
      id: 32323,
      title: "Why do we use it?",
      body:
        "It is a long established fact that a reader will be distracted by the readable content.",
      date: "7-feb-2020",
      userId: 213
    }
  ]
};

export function entryReducer(
  state = initialState,
  action: EntryActionTypes
): EntryState {
  switch (action.type) {
    case ENTRIES.FETCH_SUCCESS: {
      return {
        ...state,
        entries: state.entries.concat(action.payload as EntryObject)
      };
    }
    case ENTRIES.FETCH_ERROR: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ENTRIES.ADD: {
      return {
        ...state,
        entries: state.entries.concat(action.payload as EntryObject)
      };
    }
    case ENTRIES.EDIT: {
      // Edit user in state
      const payload = action.payload as EntryObject;
      const updatedItems = state.entries.map(entry => {
        if (entry.id === payload.id) {
          return { ...entry, ...action.payload };
        }
        return entry;
      });
      return { ...state, entries: updatedItems };
    }
    case ENTRIES.REMOVE: {
      // Remove user from state
      const payload = action.payload as EntryObject;

      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== payload.id)
      };
    }
    // case ENTRIES.GETBYID: {
    //   // Get user by id
    //   const entry = state.entries.find(entry => entry.id == action.id);
    //   return { ...state, entry };
    // }
    default:
      return state;
  }
}
