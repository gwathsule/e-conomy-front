import React from 'react';
import {Router} from "react-router-dom";
import Routes from "./routes";
import { Provider } from 'react-redux';
import history from "./services/history";
import store from "./store";

const App = () => {
  return (
      <Provider store={store}>
          <Router history={history}>
              <Routes/>
          </Router>
      </Provider>
  );
}

export default App;
