
import React from 'react';
import { Text, TextInput, View } from 'react-native';

 function MyApp() {


  

  return (
    <View> 
    <Text>
    {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
           Hello, I am a student in CIS340 {"\n"} 
          
           
     </Text>
     <TextInput  
  style={{
    height: 40, 
    borderColor: "gray",
    borderWidth: 1 
    
    }} 
    />
   
    </View>
  );
}
export default function multComp(){ 
  <View style= { {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'


  }}>
      <Text>{"\n\n\n\n\n\n\n\n"} Welocome to my Class </Text> 
      <MyApp /> 
      <MyApp />
      <MyApp />
      <MyApp />
  </View> 
}
