
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csulogo = { 
    uri: "https://denverscholarship.org/wp-content/uploads/2016/11/CSU-Logo.png",

    width: 80, 
    height: 60,

  }
  return (
    <View style={styles.container}>
      <ImageBackground source={csulogo} style={styles.image}> <Text style={styles.text}> CSU logo </Text>
      
      </ImageBackground>
    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection: 'row',


  },
  image: { 
    flex:1, 

    resizeMode: 'cover',
    justifyContent: 'center', 


  },

  text: {
    color: 'ReactDOM',
    fontsize: 40,
    fontweight: 'bold'
  

  },

  stretch: { 
    width: 80, 
    height: 60,
    resizeMode: 'stretch', 


  }

});
