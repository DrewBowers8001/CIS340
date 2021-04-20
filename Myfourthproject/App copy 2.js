
import React, { Component, useState } from 'react';
import {  Text, View, TextInput  } from 'react-native';

export default function Wordtranslator()  {
  const [text, setText]=useState(''); 
  return (
    <View style={{paddingl: 40}} >
      <TextInput 
      style={{height: 40}} 
      placeholder="input your text here!"
      onChangeText={ text => setText(text) }
      defaultValue ={text} 
      />
    <Text style={{padding: 10, fontsize: 42}}> 
        {text.split(' ').map((word) => word && '*').join(' ')}

    </Text> 

    </View>
  );
}
 