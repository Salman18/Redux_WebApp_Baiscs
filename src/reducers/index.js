import { combineReducers } from 'redux';
import TextReducer from './reducer';

const rootReducer = combineReducers({
   simple: TextReducer
});

export default rootReducer;
