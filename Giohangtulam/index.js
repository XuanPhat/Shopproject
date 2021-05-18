import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const categoryData = [
  {
    id: 1,
    name: 'rau cai',
  },
  {
    id: 2,
    name: 'ca rot',
  },
  {
    id: 3,
    name: 'khoai tay',
  },
];

const restaurantData = [
  {
    id: 1,
    name: 'rau cai',
    categories: [1],
    source: 'https://product.hstatic.net/1000191320/product/rau-cai-chip.jpg',
    price: 30,
  },
  {
    id: 2,
    name: 'ca rot',
    categories: [2],
    source:
      'https://bizweb.dktcdn.net/thumb/large/100/197/189/products/40-fb6f74ad-ba7d-4024-9ccc-ea6ce037b671.jpg',

    price: 250,
  },
  {
    id: 3,
    name: 'ca rot',
    categories: [2],
    source:
      'https://bizweb.dktcdn.net/thumb/large/100/197/189/products/40-fb6f74ad-ba7d-4024-9ccc-ea6ce037b671.jpg',

    price: 250,
  },
  {
    id: 4,
    name: 'khoai tay',
    categories: [3],
    source:
      'https://www.thuocdantoc.org/wp-content/uploads/2019/11/tac-dung-cua-khoai-tay.jpg',
    price: 400,
  },
  {
    id: 5,
    categories: [3],
    name: 'khoai tay',
    source:
      'https://www.thuocdantoc.org/wp-content/uploads/2019/11/tac-dung-cua-khoai-tay.jpg',
    price: 400,
  },
  {
    id: 6,
    categories: [3],
    name: 'khoai tay',
    source:
      'https://www.thuocdantoc.org/wp-content/uploads/2019/11/tac-dung-cua-khoai-tay.jpg',
    price: 400,
  },
];

export default function index() {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  function OnSelectcategory(category) {
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  function getBycategoryid(id) {
    let category = categories.filter((a) => a.id === id);
    if (category.length > 0) return category[0].name;
    else return '';
  }

  function Category() {
    const RenderItem = ({item}) => {
      return (
        <View style={{height: 90}}>
          <TouchableOpacity
            style={{
              width: 110,
              height: 90,
              marginLeft: 10,
              backgroundColor:
                selectedCategory?.id === item.id ? 'red' : 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => OnSelectcategory(item)}>
            <Text
              style={{
                color: selectedCategory?.id === item.id ? 'white' : 'black',
                fontSize: 20,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <FlatList
        data={categories}
        horizontal
        renderItem={RenderItem}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
      />
    );
  }

  function BodyProduct() {
    const RenderItem = ({item}) => {
      return (
        <TouchableOpacity style={{marginBottom: 12}}>
          <Image
            source={{uri: item.source}}
            resizeMode="cover"
            style={{width: '100%', height: 200}}
          />

          <View>
            {item.categories.map((categoryid) => {
              return (
                <View style={{flexDirection: 'row'}} key={categoryid}>
                  <Text style={{fontSize: 20}}>
                    {getBycategoryid(categoryid)}
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            <Text style={{fontSize: 20}}>{item.price}$</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={restaurants}
        renderItem={RenderItem}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{paddingHorizontal: 22, padding: 12}}
      />
    );
  }

  return (
    <View style={{flex: 1}}>
      {Category()}
      {BodyProduct()}
    </View>
  );
}
