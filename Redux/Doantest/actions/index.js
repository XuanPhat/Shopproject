import * as ActionTypes from './types';
export const Signinaction = (email, password) => ({
  type: ActionTypes.AUTH_SIGNIN,
  email,
  password,
});
export const Signupaction = (email, password, name, role) => ({
  type: ActionTypes.AUTH_REGISTER,
  email,
  password,
  name,
  role,
});
export const Signout = () => ({
  type: ActionTypes.AUTH_SIGNOUT,
});
