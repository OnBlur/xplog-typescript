import {
  SystemState,
  SystemActionTypes,
  UPDATE_SESSION,
  SET_MENU
} from "../state/types";

const initialState: SystemState = {
  loggedIn: false,
  menuState: true,
  session: "",
  userName: ""
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SET_MENU: {
      // Toggle menu state
      return {
        ...state,
        menuState: !state.menuState
      };
    }
    default:
      return state;
  }
}
