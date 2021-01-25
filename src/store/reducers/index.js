import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import orderReducer from './orders-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    data: orderReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )