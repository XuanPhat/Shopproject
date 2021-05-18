import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStackNavigator from './LoginStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Indexstack from './LoginStackNavigator';
const Stack = createStackNavigator();
// const Appnavigate = () => {
//   return (
//     <Stack.Navigator headerMode="none">
//       <Stack.Screen name="Home123" component={LoginStackNavigator} />
//     </Stack.Navigator>
//   );
// };
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Indexstack />
    </NavigationContainer>
  );
}
