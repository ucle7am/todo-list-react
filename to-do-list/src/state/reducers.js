const CHANGE_TO_DO = 'CHANGE-TO-DO';
const DELETE_TO_DO = 'DELETE-TO-DO';
const UPDATE_INPUT = 'UPDATE-INPUT';
const ADD_TO_DO = 'ADD-TO-DO';
const CHECK_LOCAL_STORAGE = 'CHECK_LOCAL_STORAGE';

const defaultState = {
    input: '',
    needToDo: [
        {
            id: 0,
            toDo: 'buy bread',
            isDone: false
        },
        {
            id: 1,
            toDo: 'buy meat',
            isDone: false
        }
    ]
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case DELETE_TO_DO:
            state.needToDo = state.needToDo.filter(el => el.id !== action.id);
            return state;
        case CHANGE_TO_DO:
            state.needToDo = state.needToDo.map(el => {
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
            localStorage.setItem('state', JSON.stringify(state))
            return state;
        case ADD_TO_DO:
            state.needToDo.push(
                {
                    id: state.needToDo.length > 0 ? state.needToDo[state.needToDo.length - 1].id + 1 : 0,
                    toDo: state.input,
                    isDone: false
                }
            )
            state.input = '';
            localStorage.setItem('state', JSON.stringify(state))
            return state;
        case UPDATE_INPUT:
            state.input = action.text;
            localStorage.setItem('state', JSON.stringify(state))
            return state;
        case CHECK_LOCAL_STORAGE:
            if (localStorage.getItem('state')) {
                state = JSON.parse(localStorage.getItem('state'));
            }
            return state;
        default:
            return state;
    }
}
export default reducers;
export const actionToDOChange = (id) => ({ type: CHANGE_TO_DO, id: id });
export const actionDeleteToDo = (id) => ({ type: DELETE_TO_DO, id: id });
export const actionUpdateInput = (text) => ({ type: UPDATE_INPUT, text: text });
export const actionAddToDo = () => ({ type: ADD_TO_DO });
export const actionCheckLocalStorage = () => ({ type: CHECK_LOCAL_STORAGE });
