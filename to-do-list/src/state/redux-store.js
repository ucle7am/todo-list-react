import {combineReducers, createStore} from 'redux';
import reducers from './reducers';

let reduce = combineReducers({reducers});
let store = createStore(reducers);

console.log(store);
console.log(store.getState());

export default store;