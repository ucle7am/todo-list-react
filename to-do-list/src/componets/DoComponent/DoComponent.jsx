import React from 'react';
import classes from './DoComponent.module.css'

let DoComponent = (props) => {
    return (
        <div className={classes.container}>
            {props.isDone ? <input className={classes.input} onChange={() => props.toDoChange(props.id)} defaultChecked type='checkbox' /> 
            : <input className={classes.input} onChange={() => props.toDoChange(props.id)} type='checkbox' />}
            <p className={`${props.isDone?classes.done:'1'} ${classes.p}`}>{props.toDo}</p>
            <button  onClick={() => props.deleteToDo(props.id)}>Delete</button>
        </div>
    )
}

export default DoComponent;