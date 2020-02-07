export interface SystemState {
  loggedIn: boolean;
  menuState: boolean;
  session: string;
  userName: string;
}

export const UPDATE_SESSION = "UPDATE_SESSION";
export const SET_MENU = "SET_MENU";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

interface UpdateMenuAction {
  type: typeof SET_MENU;
  payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction | UpdateMenuAction;
