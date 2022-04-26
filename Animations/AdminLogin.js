import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const AdminLogin = () => {
  return (
    <View style={styles.div1}>
      <Text style={styles.h1}>Admin Login Page</Text>
      <View style={styles.inputs}>

      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
          //   value={email}
            placeholderTextColor="#20232a"
          //   onChangeText={(email) => setEmail(email)}
          />
          
      </View>
      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
          //   value={password}
            placeholderTextColor="#20232a"
            secureTextEntry={true}
          //   onChangeText={(password) => setPassword(password)}
          />
            
      </View>
      <TouchableOpacity 
          style={styles.loginBtn} 
          // onPress={()=>handleLogin()}
          >
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AdminLogin

const styles = StyleSheet.create({
  div1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputView: {
    backgroundColor: "#fff",
    width: "80%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  inputs : {
      flex:1,
      width: "90%",
      alignItems:'center',
      justifyContent:'center'

  },
  h1 :{
      fontWeight:'bold',
      fontSize:35,
      top:50,
  },
  loginBtn: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#61dafb",
  },
  loginText:{
    fontSize:20,
    fontWeight:"bold"
  }
})