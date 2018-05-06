import { createStore, applyMiddleware } from 'redux';
import AppReducer from './Reducers'


const store = createStore(AppReducer);
export default store;