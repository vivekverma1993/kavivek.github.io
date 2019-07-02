import { createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import localforage from 'localforage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas/Index';
import rootReducer from '../reducers/Index';

const sagaMiddleware = createSagaMiddleware();

const config = {
  storage: localforage,
  key: 'primary-9109290',
  whitelist: ['user']
};

const reducer = persistCombineReducers(config, {
  ...rootReducer,
  routing: routerReducer
});

const composeEnhancers = composeWithDevTools({
  shouldRecordChanges: true
});

const configureStore = initialState => {
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

sagaMiddleware.run(rootSaga);

try {
  persistStore(store, null, () => {
    console.log(store.getState());
  });
} catch (e) {
  console.log(e);
}

export default store;
