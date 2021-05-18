import {all, fork} from 'redux-saga/effects';
import appSagas from './Doantest/sagas';
// import authSagas from './AuthApp/sagas';

export default function* rootSaga() {
  yield all([fork(appSagas)]);
  // yield all([fork(authSagas)]);
}
