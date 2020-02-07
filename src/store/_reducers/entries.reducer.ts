import { EntryState, EntryActionTypes, ENTRIES } from "../entries/types";

const initialState: EntryState = {
  entries: [
    {
      id: 1,
      title: "Why do we use it?",
      body:
        "It is a long established fact that a reader will be distracted by the readable content.",
      date: "7-feb-2020",
      userId: 213
    },
    {
      id: 2,
      title: "Why do we use it?",
      body:
        "It is a long established fact that a reader will be distracted by the readable content.",
      date: "7-feb-2020",
      userId: 213
    },
    {
      id: 3,
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
        ...action.payload
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
        ...action.payload
      };
    }
    // case ENTRIES.EDIT: {
    //   // Edit user in state
    //   const updatedItems = state.entries.map(entry => {
    //     if (entry.id === action.data.id) {
    //       return { ...entry, ...action.data };
    //     }
    //     return entry;
    //   });
    //   return { ...state, entries: updatedItems };
    // }
    // case ENTRIES.REMOVE: {
    //   // Remove user from state
    //   return {
    //     ...state,
    //     entries: state.entries.filter(entry => entry.id !== action.id)
    //   };
    // }
    // case ENTRIES.GETBYID: {
    //   // Get user by id
    //   const entry = state.entries.find(entry => entry.id == action.id);
    //   return { ...state, entry };
    // }
    default:
      return state;
  }
}
