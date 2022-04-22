import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Camera = () => {
  const [camerares, setCamerres] = useState({})
  let imageres = {}

  async function cameras() {
    launchCamera({}, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } 
      else {
        let source = response;
        setCamerres(source, console.log("camerares", camerares))
        imageres : source
        console.log("one =", imageres)

      }
    });
  }
  const temp = Object.keys(camerares).map(obj => obj)
  // console.log("temp", temp)
  console.log("one =", imageres)

  return (
    <View style={styles.container1}>
      <Text>Image Picker</Text>
      <View>

      </View>
      <View>
        <TouchableOpacity
          onPress={()=> cameras()}
        >
          <Text>Open Camera</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* {console.log("camerares.uri", camerares.uri)} */}
        {/* {Object.keys(camerares).map(obj => console.log("obj.uri", obj.assests))} */}
        <Image
          source={{uri: camerares.uri}}
          style={{height:100, width:100}}
        />
      </View>
      
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  container1 : {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})