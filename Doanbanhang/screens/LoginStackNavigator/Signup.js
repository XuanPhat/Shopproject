import React from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
export default function Signup() {
  const navigation = useNavigation();
  const [diachi, setDiachi] = React.useState('');
  const [huyen, setHuyen] = React.useState('');
  const [quan, setQuan] = React.useState('');

  const Addaddress = () => {
    firestore()
      .collection('Address')
      .add({
        diachi: diachi,
        quan: quan,
        huyen: huyen,
      })
      .then(() => {
        // OK
        // TODO: Send a email to customers (THANK YOU)
        // TODO: Send notification to call center
        console.log('User added!');
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.navigate('Diachi');
  };

  return (
    <View>
      {/* <Text>hello em yeu</Text> */}
      <Text>Địa chỉ</Text>
      <TextInput
        style={{borderColor: 'red', borderBottomWidth: 1}}
        placeholder="Nhập địa chỉ đi thằng cặc"
        onChangeText={(text) => setDiachi(text)}
      />
      <Text>Quận</Text>
      <TextInput
        style={{borderColor: 'red', borderBottomWidth: 1}}
        placeholder="Quận"
        onChangeText={(text) => setQuan(text)}
      />
      <Text>Huyện</Text>
      <TextInput
        style={{borderColor: 'red', borderBottomWidth: 1}}
        placeholder="Huyen"
        onChangeText={(text) => setHuyen(text)}
      />
      <Button title="Them moi" onPress={Addaddress} />
    </View>
  );
}
