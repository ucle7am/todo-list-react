import React from 'react';
import classes from './DoComponent.module.css'
import {actionDeleteToDo, actionToDOChange} from '../../state/state';

let DoComponent = (props) => {
    let toDoChange = (id) => {
        props.dispatch(actionToDOChange(id))
    }
    let deleteToDo = (id) => {
        props.dispatch(actionDeleteToDo(id))
    }
    return (
        <div className={classes.container}>
            {props.isDone ? <input className={classes.input} onChange={() => toDoChange(props.id)} defaultChecked type='checkbox' /> 
            : <input className={classes.input} onChange={() => toDoChange(props.id)} type='checkbox' />}
            <p className={`${props.isDone?classes.done:'1'} ${classes.p}`}>{props.toDo}</p>
            <button  onClick={() => deleteToDo(props.id)}>Delete</button>
        </div>
    )
}

export default DoComponent;