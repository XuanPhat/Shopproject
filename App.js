// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';

// import Icon from 'react-native-vector-icons/AntDesign';
// import Icon1 from 'react-native-vector-icons/Feather';
// var styles = StyleSheet.create({
//   Header: {
//     backgroundColor: 'white',
//     height: 55,
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//     flexDirection: 'row',
//     position: 'relative',
//   },
//   text: {
//     color: 'black',
//     fontSize: 15,
//     fontWeight: '700',
//   },
//   than: {
//     flex: 1,

//     backgroundColor: '#000000',
//   },
// });

// class Header extends Component {
//   render() {
//     return (
//       <View style={[styles.Header]}>
//         <Icon name="left" size={20} style={{position: 'absolute', left: 20}} />

//         <View>
//           <Text style={[styles.text]}>Shopping cart</Text>
//         </View>
//         <Icon1
//           name="search"
//           size={23}
//           style={{position: 'absolute', right: 50}}></Icon1>
//         <Icon1
//           name="shopping-cart"
//           size={23}
//           style={{position: 'absolute', right: 10, color: '#3366FF'}}></Icon1>
//       </View>
//     );
//   }
// }
// class Than extends Component {
//   render() {
//     return <View style={[styles.than]}></View>;
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, backgroundColor: '#cddc39'}}>
//         <Header />
//         <Than />
//       </View>
//     );
//   }
// }

// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// import GalleryHomework from './Baithamkhao/GalleryHomework';
// import Loginwave2 from './Loginwave2';
// import Imagegriblist from './Bailamviewmodeimage/Imagegriblist';
// import Loginalert from './Login';
// import Appnavigator from './Navigation/Appnavigator';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         {/* <GalleryHomework></GalleryHomework> */}
//         {/* <Loginwave2></Loginwave2> */}
//         {/* <Imagegriblist></Imagegriblist> */}
//         {/* <Loginwave2></Loginwave2> */}
//         {/* <Loginalert></Loginalert> */}
//         <Animate1></Animate1>
//       </View>
//     );
//   }
// }

// import * as React from 'react';
// import {View, Text, Button, TouchableOpacity, navigation} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Thunghiem from './Navigation/Thunghiem';
// import Loginwave from './Loginwave2';
// import Login from './login';
// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Di thang');
//         }}>
//         <Text>Thang cac</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function nhathangScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Thang cac</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Register');
//         }}>
//         <Text>Dang ky</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Register({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Register</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Thunghiem');
//         }}>
//         <Text>Phat pro thu nghiem</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// import React, {useState} from 'react';
// import {View, StyleSheet, Button, Alert} from 'react-native';

// const App = () => {
//   const createTwoButtonAlert = () =>
//     Alert.alert(
//       'Alert Title',
//       'My Alert Msg',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//       ],
//       {cancelable: false},
//     );

//   const createThreeButtonAlert = () =>
//     Alert.alert(
//       'Alert Title',
//       'My Alert Msg',
//       [
//         {
//           text: 'Ask me later',
//           onPress: () => console.log('Ask me later pressed'),
//         },
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//       ],
//       {cancelable: false},
//     );

//   return (
//     <View style={styles.container}>
//       <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />

//       <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
// });

// export default App;

import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// import Firestore from './Firestore/index';
// import Index123 from './Giohangtulam/index2';
// import Auth123 from './Firestore/Facebook';
// import Redux123 from './Redux';
// import Component123 from './Redux/Doantest/Components/User';
// import Login from './Loginformik/index';
// import Sagaapp from './Redux/SagaApp/Components/Product';
// import AppNavigator from './Doanbanhang/screens/AppNavigator';
import {MenuProvider} from 'react-native-popup-menu';

import Shopapp from './ShopApp/app';
import Swipe from './Animated/swipe';
import Uicategory from './codeui/index';
import Avatar from './codeui/logineatme';
import Detail from './codeui/Thongkechathang';
import Addproduct from './codeui/Addproduct';
import Productlist from './Uiproductlist';
const App = () => {
  return (
    // <MenuProvider>
    <Productlist />
    // </MenuProvider>
  );
};

export default App;
