import React from "react";
import { Provider } from "react-redux";
import { AnyAction, compose, createStore, Store } from "redux";
import rootReducer from "./reducers";
import Routing from "./router";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

function App() {
  const store: Store<any, AnyAction> = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
