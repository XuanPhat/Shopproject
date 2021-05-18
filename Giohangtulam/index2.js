import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import {icons} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Slider from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import react from 'react';
import {images} from '../constants';

export default function index2() {
  const categoryData = [
    {
      id: 1,
      source: images.Hamburger,
      name: 'Fast Food',
    },
    {
      id: 2,
      source: images.Apple,
      name: 'Fruit Item',
    },
    {
      id: 3,
      source: images.Drink,
      name: 'Drink',
    },
  ];

  const restaurantData = [
    {
      id: 1,
      name: 'Hamburger',
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
  function HeaderProduct() {
    return (
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: '#BBBDC1',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
          }}>
          <Icon name="menu" size={20} color="#BBBDC1" />
        </TouchableOpacity>

        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>HOME</Text>
        </View>

        <View
          style={{
            backgroundColor: '#FFCA8C',
            width: 40,
            height: 40,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={icons.basket} style={{width: 20, height: 20}} />
        </View>
      </View>
    );
  }

  function Formsearch() {
    return (
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <View
          style={{
            width: '100%',
            height: 48,
            backgroundColor: '#F5F5F8',
            borderRadius: 7,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{marginLeft: 20}}>
            <Icon2 name="search" size={20} />
          </TouchableOpacity>
          <View style={{width: 290, height: '100%'}}>
            <TextInput
              placeholder="search food..."
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <TouchableOpacity style={{paddingRight: 15}}>
            <Slider name="sliders" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // const [country, setCountry] = React.useState('San Francisco');
  // function Dropdownlist() {
  //   return (
  //     <react.Fragment>
  //       <View style={{paddingTop: 20, paddingLeft: 20}}>
  //         <Text style={{fontSize: 15, color: '#FF6C44', fontWeight: 'bold'}}>
  //           DELIVERY TO
  //         </Text>
  //       </View>
  //       <View style={{backgroundColor: 'red'}}>
  //         <DropDownPicker
  //           items={[
  //             // {
  //             //   label: 'USA',
  //             //   value: 'usa',
  //             //   icon: () => <Icon2 name="flag" size={18} color="#900" />,
  //             //   hidden: true,
  //             // },
  //             {
  //               label: '300 Post Street San Francisco,CA',
  //               value: 'San Francisco',
  //             },
  //             {
  //               label: 'France',
  //               value: 'france',
  //             },
  //           ]}
  //           labelStyle={{
  //             fontSize: 19,
  //             textAlign: 'left',
  //             color: 'black',
  //             fontWeight: '700',
  //           }}
  //           defaultValue={country}
  //           containerStyle={{
  //             height: 40,
  //             width: 360,
  //             paddingLeft: 10,
  //           }}
  //           // style={{backgroundColor: '#fafafa'}}
  //           itemStyle={{
  //             justifyContent: 'flex-start',
  //           }}
  //           dropDownStyle={{
  //             backgroundColor: '#fafafa',
  //             marginLeft: 20,
  //             width: 350,
  //           }}
  //           activeLabelStyle={{color: 'blue'}}
  //           placeholderStyle={{
  //             fontWeight: 'bold',
  //             textAlign: 'center',
  //           }}
  //           style={{
  //             borderTopLeftRadius: 0,
  //             borderTopRightRadius: 0,
  //             borderBottomLeftRadius: 0,
  //             borderBottomRightRadius: 0,
  //             borderColor: 'white',
  //             position: 'absolute',
  //             left: 5,
  //             zIndex: 4000,
  //           }}
  //           searchableStyle={{backgroundColor: 'red'}}
  //           arrowStyle={{marginRight: 5, color: '#FF6C44', fontSize: 10}}
  //           onChangeItem={(item) => setCountry(item.value)}
  //         />
  //       </View>
  //     </react.Fragment>
  //   );
  // }
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  function Categoryselect(category) {
    setSelectedCategory(category);
  }

  function category() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor:
              selectedCategory?.id == item.id ? '#FF6C44' : 'white',
            width: 128,
            height: 48,
            borderRadius: 8,
            marginRight: 15,
            ...styles.shadow,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={() => Categoryselect(item)}>
          <Image source={item.source} style={{width: 30, height: 30}} />
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
      <View style={{paddingLeft: 20}}>
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

  return (
    <View style={{flex: 1}}>
      {HeaderProduct()}
      {Formsearch()}
      {/* {Dropdownlist()} */}
      {category()}
    </View>
  );
}
