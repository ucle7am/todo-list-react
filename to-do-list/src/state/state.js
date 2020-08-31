const UPDATE_INPUT = 'UPDATE-INPUT';
const ADD_TO_DO = 'ADD-TO-DO';
const CHANGE_TO_DO = 'CHANGE-TO-DO';
const DELETE_TO_DO = 'DELETE-TO-DO';

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
        switch(action.type){
            case ADD_TO_DO:
                this._state.needToDo.push(
                    {
                        id: this._state.needToDo.length > 0 ? this._state.needToDo[this._state.needToDo.length - 1].id + 1 : 0,
                        toDo: this._state.input,
                        isDone: false
                    }
                )
                this._state.input = '';
                this.reRender(store);
                break;
            case DELETE_TO_DO:
                this._state.needToDo = this._state.needToDo.filter(el => el.id !== action.id);
                this.reRender(store);
                break;
            case UPDATE_INPUT:
                this._state.input = action.text;
                this.reRender(store);
                break;
            case CHANGE_TO_DO:
                this._state.needToDo = this._state.needToDo.map(el => {
                    if (el.id === action.id) {
                        if (el.isDone) {
                            el.isDone = false;
                            return el;
                        }
                        else if (!el.isDone) {
                            el.isDone = true;
                            return el;
                        }
                    }
                    else {
                        return el;
                    }
        
                })
                console.log(this._state)
                this.reRender(store);
                break;
        }
    }

}
export const actionAddToDo = () => ({type: ADD_TO_DO});
export const actionDeleteToDo = (id) => ({type: DELETE_TO_DO, id: id});
export const actionUpdateInput = (text) => ({type: UPDATE_INPUT, text: text});
export const actionToDOChange = (id) => ({type: CHANGE_TO_DO, id: id})
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