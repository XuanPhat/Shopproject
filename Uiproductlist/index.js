import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Product from './Product';
import Productdetail from './Productdetail';
import User from './User';
import Left from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather';
import Cart from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
export default function index() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Left name="chevron-thin-left" size={15} />
        </TouchableOpacity>

        <Text style={{color: 'black', fontWeight: 'bold'}}>Products List</Text>
        <View style={{flexDirection: 'row'}}>
          {/* <View style={{paddingLeft: 10}}>
            <Search name="search" size={20} />
          </View> */}

          <Cart name="shopping-cart" size={20} color="#3366FF" />
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontWeight: 'bold'},
          activeTintColor: '#3366FF',
          inactiveTintColor: '#bdc3c7',
          indicatorStyle: {height: 5, borderRadius: 5, color: '#3366FF'},
          style: {
            elevation: 0,
            height: 44,
          },
        }}>
        <Tab.Screen name="ALL" component={Product} />
        <Tab.Screen name="FURNITURE" component={Productdetail} />
        <Tab.Screen name="LIGHTING" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
