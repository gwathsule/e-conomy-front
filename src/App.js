import React from 'react';
import {Router} from "react-router-dom";
import Routes from "./routes";
import { Provider } from 'react-redux';
import history from "./services/history";
import store from "./store";
import AuthProvider from './services/AuthContext'

const App = () => {
  return (
      <Provider store={store}>
          <AuthProvider>
              <Router history={history}>
                    <Routes />
              </Router>
          </AuthProvider>
      </Provider>
  );
}

export default App;
