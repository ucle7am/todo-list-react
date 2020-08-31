import React from 'react';
import classes from './AddComponent.module.css'
import {actionUpdateInput, actionAddToDo} from '../../state/state';
let AddComponent = (props) => {
    let refInput = React.createRef();

    let update = () => {
        let text = refInput.current.value;
        props.dispatch(actionUpdateInput(text));
    }
    let addToDo = () => {
        props.dispatch(actionAddToDo())
    }
    return (
        <div>
            <input onChange={update}  ref={refInput} value={props.text} type='text'/>
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddComponent;