/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// REDUX-THUNK: ASYNC ACTIONS
// import thunkMiddleware from 'redux-thunk';

// Saga (import)
import createSagaMiddleware from 'redux-saga';

import {composeWithDevTools} from 'redux-devtools-extension';

// Saga (root)
import rootSagas from './rootSaga';

// import Countreducer from './CountApp/reducers';
// import shoppingReducer from './ProductApp/reducers';
// import authReducer from './AuthApp/reducers';
import sagaReducer from './Doantest/reducers';

// COMPONENT
// import CounterApp from './CountApp';
// import ShoppingApp from './ProductApp';
// import Total from './ShoppingApp/components/Total';
// import AuthApp from './AuthApp';
import SagaApp from './Doantest';

// ROOT REDUCER
const rootReducer = combineReducers({
  // Countreducer,
  // shoppingReducer,
  //   authReducer,
  sagaReducer,
});

// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();

const middewares = [sagaMiddleware];

// STORE
const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  composeWithDevTools(applyMiddleware(...middewares)),
  // WITHOUT DEBUG:
  // applyMiddleware(...middewares),
);

// Saga (run)
sagaMiddleware.run(rootSagas);

export default function Redux() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, padding: 24}}>
          <SagaApp />
        </View>
      </View>
    </Provider>
  );
}
