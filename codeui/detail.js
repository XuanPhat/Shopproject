import React from 'react';
import {View, Text} from 'react-native';
const data = [
  {
    id: 1,
    image: '',
    name: '',
    message: 'Em yêu anh',
  },
];
export default function detail() {
  return (
    <View style={{flex: 1}}>
      <View>
        <View
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}></View>
      </View>
    </View>
  );
}
