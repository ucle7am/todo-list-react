import React from 'react';
import classes from './AddComponent.module.css'

let AddComponent = (props) => {
    let refInput = React.createRef();

    let update = () => {
        let text = refInput.current.value;
        props.updateInput(text);
    }
    
    return (
        <div>
            <input onChange={() => update()}  ref={refInput} value={props.text} type='text'/>
            <button onClick={props.addToDo}>Add</button>
        </div>
    )
}

export default AddComponent;