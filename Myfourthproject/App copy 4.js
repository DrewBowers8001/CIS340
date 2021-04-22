
import React from 'react';
import {  Text,View , FlatList   } from 'react-native';

export default Statesapp = () => {
return (


<View style={{flex: 1, paddingTop:22}}> 

<FlatList 
data={[
  {key: 'Alabama'},
  {key: 'Alaska'},
  {key: 'Arizona'},
  {key: 'Arkansas'},
  {key: 'California'},
  {key: 'Colorado'},
  {key: 'Deleware'},
  {key: 'Florida'}
]}

returnItem ={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key}  </Text> }



/>



</View>





); 
}
  