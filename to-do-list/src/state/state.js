import addReducer from './add-reducer';
import doReducer from './do-reducer';

let store = {
    _state: {
        input: '',
        needToDo: [
            {
                id: 0,
                toDo: 'bye bread',
                isDone: false
            },
            {
                id: 1,
                toDo: 'bye meat',
                isDone: false
            }
        ]
    },
    checkLocalStorageState() {
        if (localStorage.getItem('state')) {
            console.log(JSON.parse(localStorage.getItem('state')));
            this._state = JSON.parse(localStorage.getItem('state'));
        }
          
    },
    saveStateInLocalStorage() {
        localStorage.setItem('state', JSON.stringify(this._state))
    },
    getState() {
        return this._state;
    },
    reRender() { },
    subscribe(observer) {
        this.reRender = observer;
    },
    dispatch(action) {
        this._state = doReducer(this._state, action);
        this._state = addReducer(this._state, action);
        this.reRender(store);
    }

}

/*let state;

localStorage.getItem('state')? 
state = JSON.parse(localStorage.getItem('state')):
state = {
    input: '',
    needToDo: [
        {
            id: 0,
            todo: 'bye bread',
            done: false
        },
        {
            id: 1,
            todo: 'bye meat',
            done: false
        }
    ]
};*/

/*let reRender = ()=>{};
export let addToDo = () => {
    state.needToDo.push(
        {
            id: state.needToDo.length > 0 ? state.needToDo[state.needToDo.length - 1].id + 1 : 0,
            todo: state.input,
            done: false
        }
    )
    state.input = '';
    reRender();
}*/
/*export let updateInput = (text) => {
    state.input = text;
    reRender();
}
export let subscribe = (observer) => {
    reRender = observer;
}
export let toDoChange = (id) => {
    state.needToDo = state.needToDo.map( el => {
        if(el.id === id) {
            if(el.done) {
                el.done = false;
                return el;
            }
            else if(!el.done) {
                el.done = true;
                return el;
            }
        }
        else {
            return el;
        }
        
    })
    console.log(state)
    reRender();
}
export let deleteToDo = (id) => {
    state.needToDo = state.needToDo.filter( el => el.id !== id );
    reRender();
}*/
export default store;