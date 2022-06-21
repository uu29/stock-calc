import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import home from "./home/reducer";
import { HomeState } from "./home/interface";

export interface State {
  home: HomeState;
}

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    default: {
      const combineReducer = combineReducers({
        home,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
