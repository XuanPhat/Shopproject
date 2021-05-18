import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getproduct} from '../actions';
export default function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.sagaReducer.addproduct);
  console.log(product);
  return (
    <View>
      <Button
        title="Get product"
        onPress={() => {
          dispatch(getproduct());
        }}
      />
    </View>
  );
}
