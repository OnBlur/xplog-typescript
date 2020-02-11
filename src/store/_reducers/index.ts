import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { systemReducer } from "./state.reducer";
import { entryReducer } from "./entries.reducer";

const rootReducer = combineReducers({
  entryReducer,
  systemReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
