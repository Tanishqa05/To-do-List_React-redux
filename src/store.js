import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoReducer from './reducers/TodoReducer';

const reducers = combineReducers({
  // your reducers go here
  Todo: TodoReducer
});

const initialState = {}

const middleware = [thunk];
    
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;