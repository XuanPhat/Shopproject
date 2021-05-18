import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const ActionButton = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0984e3',
        borderRadius: 6,
      }}
      onPress={() => {
        alert(data.name);
      }}>
      <Icon name="shopping-cart" color="white" size={16} />
    </TouchableOpacity>
  );
};

function ProductList({data}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        margin: 8,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {product: data});
        }}>
        <Image
          style={{
            height: 130,
            width: '100%',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          resizeMode="cover"
          source={{
            uri: data.imageUrl,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          backgroundColor: 'white',
        }}>
        <Text style={{fontWeight: '700'}}>{data.name}</Text>
        <View height={4} />
        {/* <Text style={{fontWeight: '400', color: 'grey', fontSize: 12}}>
          {data.category.name}
        </Text> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}>
        <View style={{flex: 1, paddingHorizontal: 24, paddingVertical: 24}}>
          <Text style={{fontWeight: '700', color: 'black'}}>
            {data.price} $
          </Text>
        </View>
        <View
          style={{
            paddingRight: 12,
            paddingVertical: 12,
          }}>
          <ActionButton data={data} />
        </View>
      </View>
    </View>
  );
}

export default function Product({data}) {
  const [Products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);

  const getProducts = () => {
    const data = [];
    firestore()
      .collection('Products')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const product = documentSnapshot.data();
          product.id = documentSnapshot.id;
          data.push(product);
        });

        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Alert.alert('Error', 'Something is wrong!');
        setProducts([]);
        setLoading(false);
      });
  };

  React.useEffect(getProducts, []);
  const getCategories = () => {
    const data = [];
    firestore()
      .collection('Categories')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const category = documentSnapshot.data();
          category.id = documentSnapshot.id;
          console.log(category);
          data.push(category);
        });

        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Alert.alert('Error', 'Something is wrong!');
        setCategories([]);
        setLoading(false);
      });
  };
  React.useEffect(getCategories, []);
  function CategoyList() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor:
              selectedCategory?.id == item.id ? '#FF6C44' : 'white',
            width: 146,
            height: 48,
            borderRadius: 8,
            marginRight: 15,
            ...styles.shadow,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            OnSelectedCategory(item);
          }}>
          <Image
            source={{
              uri: item.images,
            }}
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              marginLeft: 10,
              color: selectedCategory?.id == item.id ? 'white' : 'black',
              fontWeight: '700',
              fontSize: 15,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: 20}}>
        <FlatList
          data={categories}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
        />
      </View>
    );
  }
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [ProductFilter, setProductList] = React.useState([]);

  function OnSelectedCategory(item) {
    let ProductList = Products.filter((a) => a.categories.includes(item.id));
    setProductList(ProductList);
    setSelectedCategory(item);
  }

  return (
    <View>
      {/* <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </View> */}
      {CategoyList()}
      <FlatList
        data={!selectedCategory ? Products : ProductFilter}
        numColumns={2}
        keyExtractor={(p, i) => 'Product+' + p.id}
        renderItem={({item}) => {
          return <ProductList data={item} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
