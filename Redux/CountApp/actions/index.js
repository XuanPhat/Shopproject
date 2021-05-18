import * as ActionTypes from './types';

export const Increase = (number) => ({
  type: ActionTypes.Increase,
  number: number,
});
export const Decrease = (number) => ({
  type: ActionTypes.Decrease,
  number: number,
});
