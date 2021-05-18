import * as ActionTypes from '../actions/types';
const defaultstate = {
  error: null,
  Signinuser: null,
};
export default function (state = defaultstate, action) {
  switch (action.type) {
    case ActionTypes.AUTH_SIGNIN:
      return {
        ...state,
      };
    case ActionTypes.AUTH_REGISTER:
      return {
        ...state,
      };
    case ActionTypes.AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        Signinuser: action.Signinuser,
        error: null,
      };
    case ActionTypes.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        Signinuser: action.Signinuser,
        error: null,
      };
    case ActionTypes.AUTH_SIGNOUT_SUCCESS:
      return {
        ...state,
        Signinuser: null,
      };
    case ActionTypes.AUTH_SIGNIN_FAILED:
      return {
        Signinuser: null,
        error: action.error,
      };
    case ActionTypes.AUTH_REGISTER_FAILED:
      return {
        Signinuser: null,
        error: action.error,
      };
    default:
      return state;
  }
}
