import * as ActionTypes from './types';
export const Addproduct = (product, quantity) => ({
  type: ActionTypes.Addproduct,
  product: product,
  quantity: quantity,
});
export const Deleteproduct = (productId) => ({
  type: ActionTypes.Deleteproduct,
  productId: productId,
});
