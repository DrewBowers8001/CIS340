
import React, {component} from 'react';
import { render } from 'react-dom';
import {  Text, View } from 'react-native';

export default class Myapp extends Component {
  render() {
  return (
    <View style={{paddingl: 60}} >
      <Text>Hello I am here, I am a student</Text>
      <Text> I like using class components</Text> 
    
    </View>
  );
}
}