import React from 'react';
import classes from './DoComponent.module.css'

let DoComponent = (props) => {
    return (
        <div className={classes.container}>
            {props.done ? <input className={classes.input} onChange={() => props.toDoChange(props.id)} defaultChecked type='checkbox' /> 
            : <input className={classes.input} onChange={() => props.toDoChange(props.id)} type='checkbox' />}
            <p className={`${props.done?classes.done:'1'} ${classes.p}`}>{props.todo}</p>
            <button  onClick={() => props.deleteToDo(props.id)}>Delete</button>
        </div>
    )
}

export default DoComponent;