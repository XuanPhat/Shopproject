import axios from 'axios';
import React from 'react';
import {View, Text} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';

import * as ActionTypes from '../actions/types';
function* getProductsaga(action) {
  try {
    const url = 'https://training.softech.cloud/api/products';
    const response = yield axios.get(url);
    yield put({
      type: ActionTypes.GET_PRODUCT_SUCCESS,
      addproduct: response.data,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.GET_PRODUCT_ERROR,
      error: error,
    });
  }
}
function* sagas() {
  yield takeLatest(ActionTypes.GET_PRODUCT, getProductsaga);
}
export default sagas;
