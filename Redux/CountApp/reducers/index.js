import * as ActionTypes from '../actions/types';
const defaultState = {count: 0};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.Increase:
      return Object.assign({}, state, {
        count: state.count + action.number,
      });
    case ActionTypes.Decrease:
      return Object.assign({}, state, {
        count: state.count - action.number,
      });
    default:
      return state;
  }
}
