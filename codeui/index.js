import {createStackNavigator} from '@react-navigation/stack';
import Uicategory from './uicategory';
import Addcategory from './Addcategory';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
const Stackcategory = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={'uicategory'}
        component={Uicategory}
        options={{title: 'Danh muc', headerShown: false}}
      />
      <Stack.Screen
        name={'Addcategory'}
        component={Addcategory}
        options={{title: 'Thêm danh mục', headerShown: true}}
      />
    </Stack.Navigator>
  );
};
export default function index() {
  return (
    <NavigationContainer>
      <Stackcategory />
    </NavigationContainer>
  );
}
