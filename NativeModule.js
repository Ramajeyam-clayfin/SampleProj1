import React from 'react';
import { NativeModules, Button } from 'react-native';

const { MyModule } = NativeModules;

const NativeModule = () => {
  const onPress = async() => {
    console.log('We will invoke the native module here!');
   const result = await MyModule.MyEvent('Ramajeyam', 'Chennai');
   console.log("location : ", result)
//    console.log("result.loaction : ", result.location1)
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NativeModule;