import Swipeable from 'react-native-swipeable';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const SCREENWIDTH = Dimensions.get('window').width;
const leftContent = [
  <TouchableOpacity>
    <Text>Button 1</Text>
  </TouchableOpacity>,
];
// const rightButtons = () => {
//   return (
//     <View>
//       <Text>delete</Text>
//     </View>
//   );
// };
const rightButtons = [
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 50,
      backgroundColor: 'red',
    }}>
    <Icon name="delete" size={24} />
  </View>,
];

export default function swipe() {
  return (
    <Swipeable rightButtons={rightButtons}>
      <Text style={{width: SCREENWIDTH, height: 50, backgroundColor: 'blue'}}>
        My swipeable content
      </Text>
    </Swipeable>
  );
}
