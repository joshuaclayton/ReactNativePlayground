import { homeSaga } from "./screens/home/saga";
import { all } from "redux-saga/effects";

export function* rootSagas() {
  yield all([homeSaga()]);
}
