import React from 'react';

import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Cart from 'react-native-vector-icons/MaterialCommunityIcons';
const data = [
  {
    id: 1,
    image:
      'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-chair.jpg',
    name: 'White Chair',
    furniture: 'furniture',
    price: '150',
  },
  {
    id: 2,
    image:
      'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-chair.jpg',
    name: 'Pink Chair',
    furniture: 'furniture',
    price: '130',
  },
  {
    id: 3,
    image:
      'https://i.pinimg.com/474x/11/b9/2d/11b92d4e855e0815f99393f860bf7a69.jpg',
    name: 'white chair',
    furniture: 'furniture',
    price: '150',
  },
  {
    id: 4,
    image:
      'https://i.pinimg.com/474x/11/b9/2d/11b92d4e855e0815f99393f860bf7a69.jpg',
    name: 'white chair',
    furniture: 'furniture',
    price: '150',
  },
];

export default function Product() {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          // borderWidth: 3,
          // borderColor: 'red',
          width: 160,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'white',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <Image
            source={{uri: item.image}}
            style={{
              width: '100%',
              height: 150,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
        </View>

        <View
          style={{padding: 10, height: 110, justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'black', fontWeight: '700'}}>{item.name}</Text>
            <Text style={{color: '#bac2db'}}>{item.furniture}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>{item.price} $</Text>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#3366FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Cart name="cart-outline" color="white" size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => 'product' + item.id}
      />
    </View>
  );
}
