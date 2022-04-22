import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout}  from 'react-native-maps';

const Maps1 = () => {
  return (
    <View style={styles.div1}>
      <Text>Maps</Text>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        latitude: 12.977413,
        longitude: 80.251920,
        latitudeDelta: 0.004,
        longitudeDelta: 0.002}}
     >
     <Marker
     coordinate = {{
      latitude: 12.977413,
      longitude: 80.251920}}
      title={'Clayfin'}
      >
      <Callout >
        <Text>Clayfin</Text>
        <Text>Celebrating Craftsmanship</Text>
      </Callout>
      {/* <Callout> */}
        {/* <Text style={{ width: 60, height: 60}}> */}
      {/* <Image source={require('../Images/Clayfin-logo.png')} 
       style={{ width: 40, height: 40} }
       resizeMode='cover' /> */}
       {/* </Text>
        <Text>Clayfin</Text>
        <Text>Celebrating Craftsmanship</Text> */}
      {/* </Callout> */}
      
      {/* <Image source={require('../Images/Clayfin-logo.png')} 
       style={{ width: 35, height: 35} }
       /> */}
      </Marker>


    </MapView>
    </View>
  )
}

export default Maps1

const styles = StyleSheet.create({
  div1:{
    flex:1
  }
})