import { StyleSheet, Text, View, Animated, PanResponder,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const StudentLogin = () => {

    const navigation = useNavigation()

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
            // console.log('After setOffset - x coordinate', {...position.x});
            // console.log('After setOffset - y coordinate', {...position.y});
            position.setValue({x: 0, y: 0});
            // console.log('After setValue - x coordinate', {...position.x});
            // console.log('After setValue - y coordinate', {...position.y});
          },
          onPanResponderMove: (event, gestureState) => {
            // console.log ('Move');
            // console.log(gestureState.dy >= -45 ? gestureState.dy : -45.0)
            
            //console.log({...gestureState});
            position.x.setValue(gestureState.dx);
            position.y.setValue(gestureState.dy >= -45 ? ( gestureState.dy <= 0 ? gestureState.dy : 0 ) : -45.0 );
            // console.log({...position});
            
            
          },
          onPanResponderRelease: (evt, gestureState) => {
            // console.log ('Release');
            // console.log('Before flattenOffset - x coordinate', {...position.x});
            // console.log('Before flattenOffset - y coordinate', {...position.y});
        //    position.flattenOffset();
            // console.log('After flattenOffset - x coordinate', {...position.x});
            // console.log('After flattenOffset - y coordinate', {...position.y});
            if (position.y._value == -45){
                // console.log("inside")
                navigation.navigate('AdminLogin')
                position.y.setValue(0)
            }
          },
    })
    const colorInterpolation = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -20 ]
      });

    const animatedStyles = {
        transform: [
            {
                translateY : position.y

            },
            
        ]
    }

    const autoanimation = {
        transform:[
            {
                translateY : colorInterpolation
            }
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
    React.useEffect(()=>{
        Animationn()
    },[autoanimation])

    
  return (
    <View style={styles.div1}>
      <Text>StudentLogin</Text>
      
      <Animated.View 
      {...panResponder1.panHandlers}
      style={[styles.div3, animatedStyles, autoanimation]}>
          {/* <TouchableWithoutFeedback onPress={Animationn()}> */}
      <View style={styles.div2}>
          {/* <View style={styles.div99}/> */}
      </View>
      {/* </TouchableWithoutFeedback> */}
      </Animated.View>
      
    </View>
  )
}

export default StudentLogin

const styles = StyleSheet.create({
    div1:{
        flex:1
    },
    div2:{
        height:50,
        width:50,
        borderColor:'red',
        borderWidth:2,
        borderRadius:25,
        backgroundColor:'brown',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    div3:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end"
    },
    div99: {
        height: 10,
        width: 10,
        borderRadius:25,
        backgroundColor:'pink',
        // alignSelf: 'center',

    }
})