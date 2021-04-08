
import React from 'react';
import { TextInput, Text, View } from 'react-native';

 export default function MyDog(props) {
  let pic = {
    uri = "Https://raw.githubusercontent.com"

  };
  return (
    
    
    <View style={{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
        }}>
     <Image source = {pic}
      Style= {{width:200, height: 200}}/>
    <Text> Hello, I am your cat!</Text>
       </View>
  );
}