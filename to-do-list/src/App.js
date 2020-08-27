import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoComponent from './componets/DoComponent/DoComponent';
import AddComponent from './componets/AddComponent/AddComponent';

function App(props) {
  let doList = props.state.needToDo.map(el => <DoComponent deleteToDo={props.deleteToDo} toDoChange={props.toDoChange} id={el.id} key={el.id} todo={el.todo} done={el.done}/>)
  return (
    <div className="App">
      <p>To Do List</p>
      {doList}
      <AddComponent addToDo={props.addToDo} updateInput={props.updateInput} text={props.state.input}/>
    </div>
  );
}

export default App;
