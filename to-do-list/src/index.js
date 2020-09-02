import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './state/state'

store.checkLocalStorageState();

let renderFullPage = (store) => ReactDOM.render(
  <React.StrictMode>
    {console.log('rendered')}
    {store.saveStateInLocalStorage()}
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>,
  document.getElementById('root')
);

renderFullPage(store);
store.subscribe(renderFullPage);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
