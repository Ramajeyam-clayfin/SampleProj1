import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

class SpringTest extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
  //  Animated.spring(this.state.animation, {
  //       toValue: 2,
  //       friction: 2,
  //       tension: 160,
  //       useNativeDriver: true
  //     }).start();

      Animated.spring(this.state.animation, {
        toValue: 2,
        friction: 2,
        // tension: 160,
        useNativeDriver: true
      }).start(() => {
        Animated.spring(this.state.animation, {
          toValue: 1,
          friction: 2,
        //   tension: 160,
          useNativeDriver: true
        }).start();
      });
  
  }
  
  render() {
    const animatedStyles = {
      transform: [
        { scale: this.state.animation }
      ]

    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
              <Text style={styles.textStyle}>Clayfin</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: '#41cdf4',
    fontSize:  24,
  },
});

export default SpringTest;