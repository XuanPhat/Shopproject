import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
const data = [
  {
    id: 1,
    Image:
      'https://lh3.googleusercontent.com/proxy/2A13-SA9jKQ6GaVgJasSzyz5W53VjI6Imw13b6F-E8k1ATelxdnHskSipAbey6VMJK0d2BXs45H0lqOfFR13cUrxgGOMiBOgQ76U9yrePKvb4g3YpxlO1XA',
    name: 'Family',
  },
  {
    id: 2,
    Image:
      'https://png.pngtree.com/png-clipart/20190516/original/pngtree-healthy-food-png-image_3776802.jpg',
    name: 'Food',
  },
  {
    id: 3,
    Image:
      'https://png.pngtree.com/png-clipart/20190611/original/pngtree-cinema-popcorn-vector-png-png-image_3247726.jpg',
    name: 'Cinema',
  },
  {
    id: 4,
    Image:
      'data:image/jpeg;base64,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',
    name: 'Gaming',
  },
  {
    id: 5,
    Image:
      'https://image.shutterstock.com/image-vector/poker-game-logo-emblem-260nw-733848697.jpg',
    name: 'Poker',
  },
  {
    id: 6,
    Image:
      'data:image/png;base64,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',
    name: 'Lover',
  },
];

export default function uicategory({route}) {
  const [Category, setCategory] = React.useState([]);
  const getCategories = () => {
    const data = [];
    firestore()
      .collection('Addcategory')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const category = documentSnapshot.data();
          category.id = documentSnapshot.id;
          data.push(category);
        });

        setCategory(data);
      })
      .catch((error) => {
        console.log(error);
        // Alert.alert('Error', 'Something is wrong!');
      });
  };
  // React.useEffect(getCategories, []);
  useFocusEffect(React.useCallback(getCategories, []));
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
          //
          //   margin: 8,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 8,
        }}>
        {/* <View>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: item.Image,
            }}
          />
        </View> */}
        <View>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Arrow name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Category</Text>
        <TouchableOpacity>
          <Arrow name="plus" size={30} />
        </TouchableOpacity>
      </View>
      <View height={20} />
      <View
        style={{
          flexDirection: 'row',
          height: 45,
          alignItems: 'center',
          backgroundColor: '#F5F5F8',
        }}>
        <View style={{padding: 10}}>
          <Arrow name="search1" size={20} color="#898B9A" />
        </View>

        <TextInput style={{flex: 1}} placeholder="Search Category" />
      </View> */}
      <View
        style={{
          height: 150,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
          padding: 15,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Arrow name="arrowleft" size={30} />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Category</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Addcategory');
              // console.log(route);
            }}>
            <Arrow name="plus" size={30} />
          </TouchableOpacity>
        </View>
        <View height={20} />
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            backgroundColor: '#F5F5F8',
          }}>
          <View style={{padding: 10}}>
            <Arrow name="search1" size={20} color="#898B9A" />
          </View>

          <TextInput style={{flex: 1}} placeholder="Search Category" />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          //   padding: 10,
          paddingTop: 25,
          alignItems: 'center',
        }}>
        <FlatList
          data={Category}
          numColumns={3}
          //   key={3}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()}
          //   style={{width: '100%'}}
        />
      </View>
    </View>
  );
}
