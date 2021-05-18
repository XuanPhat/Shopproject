import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
export default function Diachi() {
  const navigation = useNavigation();
  const [address, setAddress] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);
  React.useEffect(() => {
    let address = [];
    firestore()
      .collection('Address')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          let service = documentSnapshot.data();
          service.id = documentSnapshot.id;

          address.push(service);
          console.log('Address add');
        });

        setAddress(address);
      })
      .catch((error) => {
        console.log(error);
        setAddress([]);
      });
  }, []);
  const renderItem = ({item}) => {
    return (
      <View style={{borderColor: 'red', borderBottomWidth: 10}}>
        <Text>{item.diachi}</Text>
        <Text>{item.quan}</Text>
        <Text>{item.huyen}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={address}
        keyExtractor={(item, index) => `address-${index}`}
        renderItem={renderItem}
      />
      <View>
        <Button
          title="Thêm mới địa chỉ"
          onPress={() => {
            navigation.navigate('Signup');
          }}
        />
      </View>
    </View>
  );
}
