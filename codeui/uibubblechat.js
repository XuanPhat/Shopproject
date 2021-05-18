import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity
        style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            borderRadius: 50,
          }}>
          <Image
            source={{
              uri:
                'https://cellphones.com.vn/sforum/wp-content/uploads/2020/04/LR-29-scaled.jpg',
            }}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Name user</Text>
          <Text>Message</Text>
        </View>
      </TouchableOpacity>
      <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            borderRadius: 50,
          }}>
          <Image
            source={{
              uri:
                'https://cellphones.com.vn/sforum/wp-content/uploads/2020/04/LR-29-scaled.jpg',
            }}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Name user</Text>
          <Text>Message</Text>
        </View>
      </View>
    </View>
  );
}
