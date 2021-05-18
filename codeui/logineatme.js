import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Eateme from 'react-native-vector-icons/Entypo';
import {Formik} from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Eye from 'react-native-vector-icons/Feather';
import Checkcircle from 'react-native-vector-icons/AntDesign';
import Closecircle from 'react-native-vector-icons/AntDesign';
// import {TextInput} from 'react-native-paper';
const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect email,try again')
    .required('Please,press email'),
  password: Yup.string()
    .min(9, 'Password must be 9 characters')
    .required('Please,press password'),
});
export default function logineatme() {
  const containerRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const logoRef2 = React.useRef(null);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        containerRef.current.transitionTo({height: 0}, 1000);
        // containerRef.current.fadeOutUpBig(750);
        logoRef.current.transitionTo({height: 0}, 750);
        logoRef.current.fadeOutUpBig(500);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        containerRef.current.transitionTo({height: 180}, 500);
        // containerRef.current.fadeInDownBig(750);

        logoRef.current.transitionTo({height: 100}, 750);
        logoRef.current.fadeInDownBig(1000);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, backgroundColor: 'white'}}
        onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={Schema}
            onSubmit={(values) => {
              // console.log(values.email.length);
              console.log(values.email.length);
            }}>
            {({
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isValid,
              values,
            }) => {
              let disabled = Object.keys(errors).length > 0;
              const [state, setState] = React.useState({
                secureTextEntry: false,
              });
              const [statusform, setStatusform] = React.useState(false);
              return (
                <React.Fragment>
                  <Animatable.View
                    ref={containerRef}
                    duration={1000}
                    animation="slideInDown"
                    style={{
                      height: 10,
                    }}>
                    <Animatable.View ref={logoRef} style={{height: 100}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: 20,
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: 60,
                            height: 60,
                            backgroundColor: '#FF6C44',
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Eateme name="spotify" size={35} />
                        </View>
                        <View style={{paddingLeft: 10}}>
                          <Text
                            style={{
                              fontSize: 30,
                              color: '#FF6C44',
                              fontWeight: 'bold',
                              letterSpacing: 2,
                            }}>
                            Eateme
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View style={{alignItems: 'center'}}>
                          <Text style={{fontSize: 23, fontWeight: '700'}}>
                            Let's Sign You In
                          </Text>
                        </View>
                        <View style={{alignItems: 'center', paddingTop: 10}}>
                          <Text style={{fontSize: 15, color: '#898B9A'}}>
                            Welcome back, you’ve been missed!
                          </Text>
                        </View>
                      </View>
                    </Animatable.View>
                  </Animatable.View>

                  <View
                    style={{
                      padding: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: '#898B9A'}}>Email</Text>
                      {errors.email ? (
                        <Text style={{fontSize: 16, color: 'red'}}>
                          {errors.email}
                        </Text>
                      ) : null}
                    </View>

                    <View
                      style={{
                        // backgroundColor: 'red',
                        // flexDirection: 'row',
                        // alignItems: 'center',
                        height: 56,
                        borderRadius: 12,
                        backgroundColor: '#F5F5F8',
                        paddingHorizontal: 24,
                        marginTop: 9,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth:
                          errors.email && values.email.length > 0 ? 2 : 0,
                        borderColor:
                          errors.email && values.email.length > 0
                            ? 'red'
                            : '#F5F5F8',
                      }}>
                      <TextInput
                        autoCapitalize="none"
                        style={{
                          //   marginTop: 5,
                          //   fontSize: 16,
                          //   backgroundColor: '#E4E4E4',
                          //   width: '90%',
                          //   height: '100%',
                          //   borderRadius: 7,
                          flex: 1,
                          height: '100%',
                          color: '#111A2C',
                        }}
                        onChangeText={handleChange('email')}
                        autoFocus={true}
                        value={values.email}
                        // onBlur={handleBlur('email')}
                      />

                      {errors.email && values.email.length > 0 && (
                        <Checkcircle
                          name="closecircleo"
                          color="red"
                          size={16}
                        />
                      )}
                      {!errors.email && values.email.length > 0 ? (
                        <Checkcircle
                          name="checkcircleo"
                          color="green"
                          size={16}
                        />
                      ) : null}
                      {/* // {!errors.email && values.email.length <= 0 && null} */}
                      {/* {isValid !== undefined &&
                    (errors.email ? (
                      <Checkcircle name="closecircleo" color="red" size={16} />
                    ) : (
                      <Checkcircle
                        name="checkcircleo"
                        color="green"
                        size={16}
                      />
                    ))} */}
                    </View>
                  </View>

                  <View style={{paddingLeft: 20, paddingRight: 20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: '#898B9A'}}>Password</Text>
                      {errors.password && (
                        <Text style={{fontSize: 16, color: 'red'}}>
                          {errors.password}
                        </Text>
                      )}
                    </View>
                    <View
                      style={{
                        // backgroundColor: 'red',
                        // flexDirection: 'row',
                        // alignItems: 'center',
                        height: 56,
                        borderRadius: 12,
                        backgroundColor: '#F5F5F8',
                        paddingHorizontal: 24,
                        marginTop: 9,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth:
                          errors.password && values.password.length > 0 ? 2 : 0,
                        borderColor:
                          errors.password && values.password.length > 0
                            ? 'red'
                            : '#F5F5F8',
                      }}>
                      <TextInput
                        autoCapitalize="none"
                        secureTextEntry={state.secureTextEntry}
                        style={{
                          //   marginTop: 5,
                          //   fontSize: 16,
                          //   backgroundColor: '#E4E4E4',
                          //   width: '90%',
                          //   height: '100%',
                          //   borderRadius: 7,
                          flex: 1,
                          height: '100%',
                          color: '#111A2C',
                        }}
                        autoCorrect={false}
                        onChangeText={handleChange('password')}
                        value={values.password}
                      />

                      {errors.password && values.password.length > 0 ? (
                        <Checkcircle
                          name="closecircleo"
                          color="red"
                          size={16}
                        />
                      ) : (
                        <Eye
                          name={state.secureTextEntry ? 'eye-off' : 'eye'}
                          size={18}
                          onPress={() => {
                            let s = state.secureTextEntry;
                            setState({secureTextEntry: !s});
                          }}
                        />
                      )}
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      marginTop: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}>
                    <Text style={{color: '#525C67'}}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <View style={{padding: 20}}>
                    <TouchableOpacity
                      disabled={disabled}
                      style={{
                        backgroundColor: disabled ? 'gray' : '#FF6C44',
                        height: 56,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={handleSubmit}>
                      <Text style={{color: 'white', fontSize: 19}}>
                        {' '}
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              );
            }}
          </Formik>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Inputcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#898B9A',
  },
});
