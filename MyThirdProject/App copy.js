

import React from 'react';
import { TextInput, Text, View } from 'react-native';

 function Student(props) {
  return (
    <View >
      <Text> Hey, My Name is {props.name}, I am a student in CIS340!</Text>
  
    </View>
  );
}
export default function MultiComp(){
return(
  
      <View style={{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
      }}>
<Text> Welcome to CIS340</Text>
<Student name = "Drew Bowerds " />
<Student name = "bill" />
<Student name = "alice" /> 
<Student name = "bill"/> 
  </View>
);
}
