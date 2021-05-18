import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {Deleteproduct} from '../actions';

export default function ProductCart() {
  const dispatch = useDispatch();
  const Addproduct = useSelector((state) => state.shoppingReducer.addproducts);

  const Total = () => {
    let result = Addproduct.reduce(
      (total, item) =>
        total +
        (item.product.price * item.quantity * (100 - item.product.discount)) /
          100,
      0,
    );
    return result;
  };
  const Numbercart = () => {
    let result = Addproduct.length;
    return result;
  };
  const renderItem = ({item}) => {
    let sum =
      (item.quantity * item.product.price * (100 - item.product.discount)) /
      100;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          paddingRight: 10,
          paddingLeft: 10,
        }}>
        <View>
          <Text>{item.product.id}</Text>
        </View>
        <View>
          <Text>{item.product.name}</Text>
        </View>
        <View>
          <Text>{item.product.price}</Text>
        </View>

        <View>
          <Text>{item.quantity}</Text>
        </View>
        <View>
          <Text>{sum}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(Deleteproduct(item.product.id));
            console.log(item.product.id);
          }}>
          <Icon name="cart-off" size={20} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20}}>Product Cart</Text>
      <Text>
        quantity product:
        <Numbercart />
      </Text>
      <FlatList
        data={Addproduct}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'cart-' + index.toString()}
        contentContainerStyle={{marginTop: 5}}
      />
      <Text>
        <Total />
      </Text>
    </View>
  );
}
