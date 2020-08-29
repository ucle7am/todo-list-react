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
    addToDo() {
        this._state.needToDo.push(
            {
                id: this._state.needToDo.length > 0 ? this._state.needToDo[this._state.needToDo.length - 1].id + 1 : 0,
                toDo: this._state.input,
                isDone: false
            }
        )
        this._state.input = '';
        this.reRender(store);
    },
    updateInput(text) {
        this._state.input = text;
        this.reRender(store);
    },
    toDoChange(id) {
        this._state.needToDo = this._state.needToDo.map(el => {
            if (el.id === id) {
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
    },
    deleteToDo(id) {
        this._state.needToDo = this._state.needToDo.filter(el => el.id !== id);
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