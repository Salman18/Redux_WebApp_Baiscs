import { combineReducers } from 'redux';
// import  BooksReducer from './reducer_books';
// import  ActiveBook from './reducer_active_book';
import TextReducer from './reducer';

const rootReducer = combineReducers({
   simples: TextReducer
});

export default rootReducer;
