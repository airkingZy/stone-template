import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TestChangeName1 } from "./action";
const initialState = {
  current: "0"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGENAME": {
      return TestChangeName1(state, initialState, action);
    }
    case "CHANGECURRENT": {
      return {
        ...state,
        current: String(action.current)
      };
    }
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
