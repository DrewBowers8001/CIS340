
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
   onPressButton(){
      alert('you pressed a button ')
   }
   render(){

   
  return (
    <View style={styles.container}>
      
    <View style= {styles.containerButton}> 
    <Button 
      onPress={this.onPressButton}
      
      
      
     title='press button 1' 
      /> 
    
    
    </View> 
    <View style= {styles.containerButton}> 
      

    </View>

    <Button 
      onPress={this.onPressButton}   
      
     title='press button 2' 
      /> 

<Button 
     onPress={this.onPressButton}
      
      
      
     title='Great'
     color='green'

      /> 


      <View style= {styles.containerButton} >
          




      </View>
      <Button 
      onPress={() => {alert('Yay' );}

      
      }   
      
     title='press'
     color='purple '

      /> 

    </View>
  );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },

  containerButton: { 
    margin: 20, 

  },

  containerLayout: { 
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
