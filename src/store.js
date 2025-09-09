import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';

const reducers = combineReducers({
  // your reducers go here
});

const initialState = {}

const middleware = [thunk];
    
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;