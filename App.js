import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Camera from './Camera'
import Contacts1 from './Contacts'
import DeviceInfo1 from './DeviceInfo'
import Maps1 from './Maps'
import Navigation from './Animations/Navigation'

const App = () => {
  return (
    <View style={styles.div1}>
      {/* <Camera/> */}
      {/* <Contacts1/> */}
      {/* <DeviceInfo1/> */}
      {/* <Maps1/> */}
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  div1:{
    flex:1
  }
})