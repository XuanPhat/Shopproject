import * as ActionTypes from '../actions/types';
const defaultState = {
  errors: null,
  addproduct: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT:
      return {
        ...state,
      };
    case ActionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        addproduct: action.addproduct,
        errors: null,
      };
    case ActionTypes.GET_PRODUCT_ERROR:
      return {
        ...state,
        addproduct: [],
        errors: action.errors,
      };
    default:
      return state;
  }
}
