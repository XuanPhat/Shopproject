import React from 'react';
import {View, Text} from 'react-native';
import Product from './Components/Product';
import ProductCart from './Components/ProductCart';
export default function ProductApp() {
  return (
    <View>
      <Product />
      <ProductCart />
    </View>
  );
}
