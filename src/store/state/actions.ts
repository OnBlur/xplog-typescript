import {
  SystemState,
  UPDATE_SESSION,
  SET_MENU,
  SystemActionTypes
} from "./types";

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}

export function setMenu(menuState: SystemState): SystemActionTypes {
  return {
    type: SET_MENU,
    payload: menuState
  };
}
