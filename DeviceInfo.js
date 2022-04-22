import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import DeviceInfo from 'react-native-device-info'

const DeviceInfo1 = () => {

    const[UniqueId, setUniqueId] = useState()
    const[ApiLevel, setApiLevel] = useState()
    const[DeviceId, setDeviceId] = useState()
    const[AppName, setAppName] = useState()
    const[BatteryLevel, setBatteryLevel] = useState()
    const[Emulator, setEmulator] = useState()

    const getDeviceInfo = async() => {
        let UniqueId = ''
    let ApiLevel = ''
    let DeviceId = ''
    let AppName = ''
    let BatteryLevel = ''
    let Emulator = ''

    UniqueId = DeviceInfo.getUniqueId();
    
    await DeviceInfo.getApiLevel().then(apiLevel => {
      ApiLevel = apiLevel;
    });
    DeviceId = DeviceInfo.getDeviceId();
    AppName = DeviceInfo.getApplicationName();
    await DeviceInfo.getBatteryLevel().then(batteryLevel => {
      BatteryLevel = batteryLevel
    });
    await DeviceInfo.isEmulator().then(isEmulator => {
      if(isEmulator)  Emulator = 'true'
      else Emulator = 'false'
    });

    setUniqueId(UniqueId)
    setApiLevel(ApiLevel)
    setDeviceId(DeviceId)
    setAppName(AppName)
    setBatteryLevel(BatteryLevel)
    setEmulator(Emulator)
    
    }


  return (
    <View style={styles.div1}>
      <Text style={styles.h1}>DeviceInfo</Text>
      <TouchableOpacity onPress={()=> getDeviceInfo()}>
          <Text style={styles.b1}>Get Device Info</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>UniqueId: {UniqueId}</Text>
            <Text style={styles.textStyle}>ApiLevel :{ApiLevel}</Text>
            <Text style={styles.textStyle}>DeviceId :{DeviceId}</Text>
            <Text style={styles.textStyle}>AppName :{AppName}</Text>
            <Text style={styles.textStyle}>BatteryLevel :{BatteryLevel}</Text>
            <Text style={styles.textStyle}>Emulator :{Emulator}</Text>
    </View>
  )
}

export default DeviceInfo1

const styles = StyleSheet.create({
    div1:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    h1 :{
        fontSize:40,
        fontWeight:'bold'
    },
    b1:{
        borderWidth:2,
        padding:8,
        borderRadius:10,
        fontSize:20,
        backgroundColor:'#1a66ff',
        color:'white',
        margin:10
    },
})