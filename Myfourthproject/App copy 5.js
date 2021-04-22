
import React from 'react';
import {  Text,View , SectionList   } from 'react-native';

export default Statesapp = () => {
return (


<View style={{flex: 1, paddingTop:22}}> 

<SectionList 
sections={[
  
  {tile: 'A', data: ['Alabama', 'Alaska', 'Arixzona']},
  {tile: 'c', data: ['California', 'Colorado', 'Conneticut']},



]} 

renderItem ={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item}  </Text> }
renderSectionHeader={({section}) => <Text style={{paddingTop: 4, PaddingLeftt: 10, paddingRight: 10, 
paddingBottom: 4, 
fontSize: 14, 
fontWeight: 'bold', 
backgroundColor: '9FA8DA'}}>{section.title} </Text> }
keyExtractor={(item,index) =>index}


/>



</View>





); 
}
  