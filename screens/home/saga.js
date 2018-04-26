import { select, takeEvery, all } from "redux-saga/effects";
import { DO_SOMETHING, setNavigationStateFromProps } from "./actions";
import { HOME_REDUCER_NAME } from "./reducer";

function* handleDoSomething({ navigation }) {
  console.log("handleDoSomething");
  const state = yield retrieveState(HOME_REDUCER_NAME);
  setNavigationStateFromProps(navigation, state);
}

function* handleDoSomethingElse({ navigation }) {
  console.log("handle something else");
}

export function* homeSaga() {
  yield all([
    takeEvery(DO_SOMETHING, handleDoSomethingElse),
    takeEvery(DO_SOMETHING, handleDoSomething),
    takeEvery(DO_SOMETHING, handleDoSomethingElse)
  ]);
}

function retrieveState(key) {
  return select(id => id[key]);
}
