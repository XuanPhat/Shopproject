import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Increase, Decrease} from '../actions';
export default function counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.Countreducer.count);
  console.log(counter);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


        
      }}>
      <TouchableOpacity
        onPress={() => {
          dispatch(Increase(2));
        }}>
        <Text style={{fontSize: 20, marginRight: 20}}>+</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20}}>{counter}</Text>
      <TouchableOpacity
        style={{marginLeft: 20}}
        onPress={() => {
          dispatch(Decrease(2));
        }}>
        <Text style={{fontSize: 30}}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
