import {retry} from '@redux-saga/core/effects';
import React from 'react';
import {View, Text, FlatList} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
export default function uithongke() {
  const data = [
    {
      id: 1,
      name: 'Thắng',
      order: 30,
    },
    {
      id: 2,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 3,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 4,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 5,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 6,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 7,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 8,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 9,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 10,
      name: 'Tokuda',
      order: 20,
    },
    {
      id: 11,
      name: 'Tokuda',
      order: 20,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#EDE5FF',
          width: 320,
          height: 70,
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'red',
            }}></View>
          <Text
            style={{
              paddingLeft: 10,
              color: 'black',
              opacity: 0.5,
              fontSize: 15,
            }}>
            {item.name}
          </Text>
        </View>

        <Text
          style={{
            color: 'black',
            opacity: 0.5,
            fontSize: 15,
          }}>
          {item.order}
        </Text>
      </View>
    );
  };
  return (
    <LinearGradient colors={['#C77EFF', '#9762FF']} style={{flex: 1}}>
      <View style={{alignItems: 'center', padding: 10}}>
        <Text style={{fontSize: 20, color: 'white'}}>Information user</Text>
      </View>
      <View height={200} />
      <View
        style={{
          padding: 20,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          flex: 1,
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => {
            return <View style={{height: 20}} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}
