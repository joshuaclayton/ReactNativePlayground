import { DO_SOMETHING } from "./actions";

export const HOME_REDUCER_NAME = "home";
export const INITIAL_STATE = { foo: 1 };

export default function homeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return { ...state, foo: state.foo + 1 };
    default:
      return state;
  }
}
