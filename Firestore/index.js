import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Create from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
export default function index() {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  const getUsers = () => {
    const data = [];
    firestore()
      .collection('Users')
      // Sắp xếp asc / desc
      .orderBy('name', 'asc')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const user = documentSnapshot.data();
          user.id = documentSnapshot.id;
          data.push(user);
        });
        // set state
        setLoading(false);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'Something is wrong!');
        setLoading(false);
        setUsers([]);
      });
  };
  const removeUser = (id) => () => {
    firestore()
      .collection('Users')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User removed!');
        setRefresh(refresh + 1);
      });
  };

  const Adduser = () => {
    firestore()
      .collection('Users')
      .add({
        age: '20',
        name: 'thinh đỉ',
      })
      .then(() => {
        console.log('User added!');
        setRefresh(refresh + 1);
      });
  };

  React.useEffect(getUsers, [refresh]);
  const RenderItem = ({item}) => {
    return (
      <React.Fragment>
        <TouchableOpacity onPress={Adduser}>
          <Create name="create" size={30} />
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.text}>{item.age}</Text>
          <Text style={styles.text}>{item.name}</Text>
          <Image
            source={{uri: item.image}}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <TouchableOpacity onPress={removeUser(item.id)}>
            <Icon name="delete" size={30} />
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
var styles = StyleSheet.create({
  body: {
    paddingLeft: 20,
    paddingRight: 20,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
});
