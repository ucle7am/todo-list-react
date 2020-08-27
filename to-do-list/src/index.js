import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './state/state'
import {toDoChange, deleteToDo, updateInput,addToDo} from './state/state'

let renderFullPage = () => ReactDOM.render(
  <React.StrictMode>
    {console.log('rendered')}
    {localStorage.setItem('state', JSON.stringify(state))}
    <App state={state} addToDo={addToDo} updateInput={updateInput} deleteToDo={deleteToDo} toDoChange={toDoChange}/>
  </React.StrictMode>,
  document.getElementById('root')
);
renderFullPage();
subscribe(renderFullPage);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
