import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import basket from './basket';
import itemsReducer from './items';
import cardReducer from './cardRed';

let reducers = combineReducers({
  basket,
  items: itemsReducer,
  cardRed: cardReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.store = store;
export default store;
