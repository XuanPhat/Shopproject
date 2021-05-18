import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
export default function avatar() {
  const [image1, setImage] = React.useState(null);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          })
            .then((image) => {
              setImage(image.path);
              // console.log(image.path);
            })
            .catch((err) => {
              console.log('openCamera catch' + err.toString());
            });
        }}>
        <Image
          source={{
            uri: image1,
          }}
          style={{height: 100, width: 100, borderRadius: 50}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}
