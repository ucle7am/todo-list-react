const CHECK_LOCAL_STORAGE = 'CHECK_LOCAL_STORAGE';
const SAVE_IN_LOCAL_STORAGE = 'SAVE_IN_LOCAL_STORAGE';

const localStorageReducer = (state, action) => {
    switch (action.type) {
        case CHECK_LOCAL_STORAGE:
            if (localStorage.getItem('state')) {
                state = JSON.parse(localStorage.getItem('state'));
            }
            return state;
        case SAVE_IN_LOCAL_STORAGE:
            localStorage.setItem('state', JSON.stringify(this._state))
            return state;
        default:
            return state;
    }
}

export default localStorageReducer;
export const actionCheckLocalStorage = () => ({ type: CHECK_LOCAL_STORAGE});
export const actionSaveInLocalStorage = () => ({ type: SAVE_IN_LOCAL_STORAGE });