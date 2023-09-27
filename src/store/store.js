import { legacy_createStore as createStore, combineReducers } from 'redux';
import { paginationReducer } from './Reducers/paginationReducer';

export const initialState = {
  currentPage: 1,
};

const rootReducer = combineReducers({
  pagination: paginationReducer,
});

const store = createStore(rootReducer);

export default store;
