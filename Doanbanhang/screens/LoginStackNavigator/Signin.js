import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Signin() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>hello123</Text>
      <Button
        title="hello qua thang sign up"
        onPress={() => {
          navigation.navigate('Diachi');
        }}
      />
    </View>
  );
}
