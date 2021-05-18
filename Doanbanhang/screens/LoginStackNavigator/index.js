import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from './Signin';
import Signup from './Signup';
import Diachi from './Diachi';
const Stack = createStackNavigator();
export default function LoginStackNavigator() {
  return (
    <Stack.Navigator options={{Headers: true}}>
      <Stack.Screen
        name="hello"
        component={Signin}
        options={{title: 'Đơn hàng'}}
      />
      <Stack.Screen
        name="Diachi"
        component={Diachi}
        options={{title: 'Danh sách địa chỉ'}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Địa chỉ'}}
      />
    </Stack.Navigator>
  );
}
