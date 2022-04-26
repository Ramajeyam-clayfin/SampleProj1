import { StyleSheet, Text, View, Animated, PanResponder,TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { NativeBaseProvider, Tooltip } from 'native-base'
import {LogBox} from 'react-native'

LogBox.ignoreLogs(['Require cycle:']);


const StudentLogin = () => {

    const navigation = useNavigation()
    const [screens , setScreens] = useState(0)
    const [keybord , setkeybord] = useState(0)
    const [tooltip , settooltip] =  useState(true)
    const [label , setLabel] =  useState("Pull me for Admin Login")

    const position = new Animated.ValueXY();
    const anim = new Animated.Value(0)
    const panResponder1 = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: ()=> true,
        // onPanResponderMove:(evt, gs) => {
        //     console.log(gs.dx)
        // },
        onPanResponderGrant: (evt, gestureState) => {
            // console.log ('Grant');
            // console.log('Before setOffset - x coordinate', {...position.x});
            // console.log('Before setOffset - y coordinate', {...position.y});
            position.setOffset({
              x: position.x._value,
              y: position.y._value,
            });
            position.setValue({x: 0, y: 0});
          },
          onPanResponderMove: (event, gestureState) => {
            // console.log ('Move');
            
            //console.log({...gestureState});
            // position.x.setValue(gestureState.dx);
            position.y.setValue(gestureState.dy >= -45 ? ( gestureState.dy <= 0 ? gestureState.dy : 0 ) : -45.0 );
            // console.log({...position});
            if (position.y._value == -35){
                // console.log("inside")
                !tooltip ?
               ( setLabel('Admin Login'),
                settooltip(true, console.log("tooltip : true : ", !tooltip))) : null
            }
            
            
          },
          onPanResponderRelease: (evt, gestureState) => {
            position.y._value !== -45 ? position.y.setValue(0) : null
            // console.log ('Release');
        //    position.flattenOffset();]
            if (position.y._value == -45){
                // console.log("inside")
                navigation.navigate('AdminLogin')
                position.y.setValue(0)
                settooltip(false, console.log('tooltip : false : ', !tooltip))

            }
          },
    })

    const animatedStyles = {
        transform: [
            {
                translateY : position.y

            },
            
        ]
    }

    
    const Animationn = () => {
        Animated.spring(anim , {
            toValue:1,
            friction:2,
            useNativeDriver:true
        }).start(()=>{
            Animated.spring(anim, {
                toValue:0,
                friction:2,
                useNativeDriver:true
            }).start();
        });
    }
    useEffect(()=>{
        Animationn()
    },[autoanimation])

    const positionInterpolation = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -20 ]
      });

    useEffect(() => {

        const timer = setTimeout(() => {
          console.log('after 2 second!')
          setScreens(1)
          settooltip(false)
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    const autoanimation = {
        transform:[
            {
                translateY : positionInterpolation
            }
        ]
    }

    
  return (
     <NativeBaseProvider>
        <View style={styles.div1}>
        
        <View style={styles.inputs}>
            <Text style={styles.h1}>Student Login Page</Text>

            <View style={styles.inputView}>
                <TextInput
                  style={[styles.TextInput, {}]}
                  placeholder="Email"
                //   value={email}
                  placeholderTextColor="#20232a"
                //   onChangeText={(email) => setEmail(email)}
                />
                
            </View>
            <View style={styles.inputView}>
                <TextInput
                  style={[styles.TextInput, {marginBottom:5}]}
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
      
        <Animated.View 
            {...panResponder1.panHandlers}
            style={[styles.div3, (screens === 0 ? autoanimation : animatedStyles) ]}>
               
            <Tooltip 
                label={label} 
                isOpen={tooltip}
                // style={[(screens === 0 ? autoanimation : animatedStyles),{position:'absolute'}]}
                >
    
                <View style={styles.div2}>
                    {/* <View style={styles.div99}/> */}
                </View>
            </Tooltip>
            
            </Animated.View>
        
        </View>
    </NativeBaseProvider>
  )
}

export default StudentLogin

const styles = StyleSheet.create({
    div1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    div2:{
        height:50,
        width:50,
        borderColor:'black',
        borderWidth:2,
        borderRadius:25,
        backgroundColor:'#61dafb',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    div3:{
        flex:1,
        alignSelf:'flex-end',
        justifyContent:"flex-end",
        // alignItems:"flex-end"
    },
    div99: {
        height: 10,
        width: 10,
        borderRadius:25,
        backgroundColor:'pink',
        // alignSelf: 'center',

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
          justifyContent:'center',
          marginTop:100

      },
      h1 :{
          fontWeight:'bold',
          fontSize:25,
        //   top:50,
        margin:20
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