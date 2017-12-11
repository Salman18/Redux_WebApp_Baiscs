import { combineReducers } from 'redux';S
import TextReducer from './reducer';

const rootReducer = combineReducers({
   simple: TextReducer
});

export default rootReducer;
