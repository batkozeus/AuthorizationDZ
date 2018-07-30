import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import sessionMiddleware from './middleware/session';
import session from './reducers/session';

const rootReducer = combineReducers({
  session
});

const middleware = [
  thunkMiddleware,
  sessionMiddleware
];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

let sessionState = null;

try {
  sessionState = JSON.parse(localStorage.getItem('session'));
} catch (err) {
  console.log(err);
}

const persistedState = sessionState ? {
  session: sessionState
} : {};

const store = createStore(rootReducer, persistedState, enhancer);

export default store;