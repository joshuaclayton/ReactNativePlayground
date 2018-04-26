import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Navigation from "./Navigation.js";
import rootReducer from "./Reducer.js";

import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
