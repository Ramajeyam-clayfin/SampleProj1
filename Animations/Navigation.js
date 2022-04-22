import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StudentLogin from './StudentLogin'
import AdminLogin from './AdminLogin'
import SpringTest from './Swiptest'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name='SpringTest' component={SpringTest}/> */}
        <Stack.Screen name='StudentLogin' component={StudentLogin}/>
        <Stack.Screen name='AdminLogin' component={AdminLogin}/>
    </Stack.Navigator>
  )
}

export default Navigation