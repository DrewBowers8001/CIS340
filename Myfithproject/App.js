import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {{flex: 1, 
    flexDirection: 'column',
    justifycontent: 'center',
    alignItems: 'stretch'}}>
      <View style = {{width: 50, height: 50, backgroundColor: 'red', alignSelf: 'center'}}/> 
      <View style = {{width: 50, height: 50,  backgroundColor: 'blue'}}/>
      <View style = {{ width: 50,height: 50, backgroundColor: 'green'}}/>
    </View>
  );
}


