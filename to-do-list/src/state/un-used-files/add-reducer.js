const UPDATE_INPUT = 'UPDATE-INPUT';
const ADD_TO_DO = 'ADD-TO-DO';

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
const addReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            state.needToDo.push(
                {
                    id: state.needToDo.length > 0 ? state.needToDo[state.needToDo.length - 1].id + 1 : 0,
                    toDo: state.input,
                    isDone: false
                }
            )
            state.input = '';
            return state;
        case UPDATE_INPUT:
            state.input = action.text;
            return state;
        default:
            return state;
    }
}

export default addReducer;
export const actionUpdateInput = (text) => ({ type: UPDATE_INPUT, text: text });
export const actionAddToDo = () => ({ type: ADD_TO_DO });