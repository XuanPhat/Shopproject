import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {Signinaction, Signupaction} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
export default function User() {
  const dispatch = useDispatch();
  const adduser = useSelector((state) => state.sagaReducer.Signinuser);
  console.log(adduser);
  return (
    <View>
      <Formik
        initialValues={{email: '', password: '', name: '', role: 'User'}}
        validateOnMount={true}
        onSubmit={(values) => {
          dispatch(
            Signupaction(
              values.email,
              values.password,
              values.name,
              values.role,
            ),
          );
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          // console.log(errors);

          return (
            <React.Fragment>
              <View>
                <Text>Email</Text>
                <TextInput
                  style={{borderWidth: 1, borderColor: 'red'}}
                  onChangeText={handleChange('email')}
                />
              </View>
              <View>
                <Text>Password</Text>
                <TextInput
                  style={{borderWidth: 1, borderColor: 'red'}}
                  onChangeText={handleChange('password')}
                />
              </View>
              <View>
                <Text>Name</Text>
                <TextInput
                  style={{borderWidth: 1, borderColor: 'red'}}
                  onChangeText={handleChange('name')}
                />
              </View>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 70,
                  backgroundColor: 'pink',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleSubmit}>
                <Text>Đăng nhập</Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        }}
      </Formik>
    </View>
  );
}
