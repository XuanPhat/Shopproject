import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {Addproduct} from '../actions';
const products = [
  {id: 1, name: 'iPhone 6', price: 600, discount: '10'},
  {id: 2, name: 'iPhone 7', price: 800, discount: '5'},
  {id: 3, name: 'iPhone 8', price: 1000, discount: '7'},
  {id: 4, name: 'iPhone X', price: 1200, discount: '0'},
];

export default function Product() {
  const dispatch = useDispatch();
  const Product = () => {
    return (
      <View>
        <Text style={{fontSize: 30}}>Product</Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
            paddingRight: 10,
            paddingLeft: 10,
          }}>
          <View>
            <Text>{item.id}</Text>
          </View>
          <View>
            <Text>{item.name}</Text>
          </View>
          <View>
            <Text>{item.price}</Text>
          </View>
          <View>
            <Text>{item.discount}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(Addproduct(item, 1));
            }}>
            <Icon name="shopping-cart" size={20} />
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Product />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'product-' + index.toString()}
        contentContainerStyle={{marginTop: 5}}
      />
    </React.Fragment>
  );
}
