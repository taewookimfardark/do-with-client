import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import {AsyncStorage} from 'react-native';
import {persistReducer, persistStore} from 'redux-persist';
import {enableBatching} from 'redux-batched-actions';

import http from '../lib/http';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const deps = {
  http
};

const logicMiddleware = createLogicMiddleware([

], deps);

const middleware = applyMiddleware(
  logicMiddleware
);

const enhancer = composeEnhancers(middleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
};

const reducer = persistReducer(persistConfig, combineReducers({
  auth: require('../auth/authStore').authReducer
}));

export const store = createStore(enableBatching(reducer), enhancer);
export const persistor = persistStore(store);