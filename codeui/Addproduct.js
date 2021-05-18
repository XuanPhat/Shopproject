import React from 'react';
import {View, Text} from 'react-native';

export default function Addproduct() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          width: '100%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
          backgroundColor: 'white',
        }}></View>
    </View>
  );
}
