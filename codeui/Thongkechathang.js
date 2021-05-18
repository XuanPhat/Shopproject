import React from 'react';
import {View, Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
export default function Thongkechathang() {
  const [product, setProduct] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const getProducts = () => {
    const data = [];
    firestore()
      .collection('Products')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const user = documentSnapshot.data();
          user.id = documentSnapshot.id;
          data.push(user);
        });
        // set state
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);

        setProduct([]);
      });
  };
  const getProfiles = () => {
    const data = [];
    firestore()
      .collection('Profiles')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const user = documentSnapshot.data();
          user.id = documentSnapshot.id;
          data.push(user);
        });
        // set state
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);

        setProduct([]);
      });
  };
  const getCategory = () => {
    const data = [];
    firestore()
      .collection('Categories')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const user = documentSnapshot.data();
          user.id = documentSnapshot.id;
          data.push(user);
        });
        // set state
        setCategory(data);
      })
      .catch((error) => {
        console.log(error);

        setCategory([]);
      });
  };
  React.useEffect(getProducts, []);
  React.useEffect(getProfiles, []);
  React.useEffect(getCategory, []);
  return (
    <View>
      <Text>Product:{product.length}</Text>
      <Text>User:{profile.length}</Text>
      <Text>Category:{category.length}</Text>
      {/* <Button
        title="Product"
        onPress={() => {
          console.log(category.length);
        }}
      /> */}
    </View>
  );
}
