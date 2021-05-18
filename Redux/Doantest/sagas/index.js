import AuthService from '../../../Services/Authservices';

import * as ActionTypes from '../actions/types';
import {put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

function* Signin(action) {
  try {
    const response = yield AuthService.Signin(action.email, action.password);
    const profile = yield AuthService.getProfile(response.user.uid);
    let user = response.user;
    user.profile = profile;

    yield put({
      type: ActionTypes.AUTH_SIGNIN_SUCCESS,
      Signinuser: user,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.AUTH_SIGNIN_FAILED,
      error: error,
    });
  }
}

function* Signout() {
  try {
    yield AuthService.signOut();
    yield put({
      type: ActionTypes.AUTH_SIGNOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
  }
}
function* Register(action) {
  try {
    const response = yield AuthService.register(
      action.email,
      action.password,
      action.name,
      action.role,
    );
    if (response === 'User account created') {
      Alert.alert('Success');
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: ActionTypes.AUTH_REGISTER_FAILED,
      error: error,
    });
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_SIGNIN, Signin);

  yield takeLatest(ActionTypes.AUTH_SIGNOUT, Signout);
  yield takeLatest(ActionTypes.AUTH_REGISTER, Register);
}

export default sagas;
