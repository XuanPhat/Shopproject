import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function UserTabNavigator() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}
