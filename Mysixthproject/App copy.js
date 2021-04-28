
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csulogo = { 
    uri: "https://denverscholarship.org/wp-content/uploads/2016/11/CSU-Logo.png",

    width: 80, 
    height: 60,

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <Image 
      style={styles.localcsulogo}
      source={require()}
        />

        <Image 
        stle={styles.urlCSUlogo}
        source={{
          uri: "https://denverscholarship.org/wp-content/uploads/2016/11/CSU-Logo.png"
        }}
        />

        <Image 
        style={styles.stretch}
        source= {csuLogo} />  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 50, 

  },
  localcsulogo: { 
    width: 50,
    height:65,

  },

  urlCSUlogo: {
    width: 50,
    height: 60

  },

  stretch: { 
    width: 80, 
    height: 60,
    resizeMode: 'stretch', 
    

  }

});
