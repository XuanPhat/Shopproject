import * as ActionTypes from '../actions/types';
const defaultState = {
  loading: false,
  addproducts: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.Addproduct:
      var found = [...state.addproducts].find(
        (item) => item.product.id === action.product.id,
      );
      if (found) {
        found.quantity++;
        return {
          ...state,
          addproducts: [...state.addproducts],
        };
      }
      var addproducts = [
        ...state.addproducts,
        {product: action.product, quantity: action.quantity},
      ];
      return {
        ...state,
        addproducts: addproducts,
      };

    case ActionTypes.Deleteproduct:
      var addproducts = [...state.addproducts].filter(
        (item) => item.product.id !== action.productId,
      );
      return {
        ...state,
        addproducts: addproducts,
      };

    default:
      return state;
  }
}
