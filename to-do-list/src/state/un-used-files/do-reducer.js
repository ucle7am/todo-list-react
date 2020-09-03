const CHANGE_TO_DO = 'CHANGE-TO-DO';
const DELETE_TO_DO = 'DELETE-TO-DO';
const doReducer = (state, action) => {
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
            return state;
        default:
            return state;
    }
}
export default doReducer;
export const actionToDOChange = (id) => ({type: CHANGE_TO_DO, id: id});
export const actionDeleteToDo = (id) => ({type: DELETE_TO_DO, id: id});