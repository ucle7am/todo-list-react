import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoComponent from './componets/DoComponent/DoComponent';
import AddComponent from './componets/AddComponent/AddComponent';

function App(props) {
  let doList = props.state.needToDo.map(el => <DoComponent dispatch={props.dispatch} id={el.id} key={el.id} toDo={el.toDo} isDone={el.isDone}/>)
  return (
    <div className="App">
      <p>To Do List</p>
      {doList}
      <AddComponent dispatch={props.dispatch} text={props.state.input}/>
    </div>
  );
}

export default App;
