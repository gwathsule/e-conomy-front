import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.css';

/*
    troquei o <React.StrictMode> para <React.Fragment> porquê há algumas ferramentas do Reactstrap que estão sendo
    atualizadas ainda, e utilizando o <React.StrictMode> o console fica emitindo o aviso de código legado
    (legacy context api has been detected within a strict-mode tree. reactstrap)
 */
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
