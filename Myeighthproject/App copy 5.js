
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function App()

const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => { 
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if ( permissionResult.granted === false){ 
      alert('Permission is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) { 
      return;
    }
    setSelectedImage({localUri: pickerResult.uri});
  };

  if(selectedImage !== null){ 
    return(
      <View style={styles.container}>
          <Image


      </View>
  }
  
   


    const {count} = this.state; 
  return (
    <View style={styles.container}>
     <View style={styles.container}>


     <Image source = {{uri=''}} style = {styles.logo}/>
     <Text style = {styles.insts}> Press the button to select image 
     
     
     </Text>  
     
     
     
     
     </View>

     <TouchableOpacity
       style = {styles.Button}
       onPress = { openImagePickerAsync} >
         <Text Style= {styles.buttonText}>Pick Image </Text> 
         <Text> Touch Me </Text>
     </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  Button: { 
    alignItems: "center" , 
  backgroundColor: 'blue',
padding: 10, 
  },


  counterText: {
    alignItems: "center",
    padding:10

  }, 
  Insts: { 
color: '#778999',
marginHorizontal: 15, 

  },
  logo: { 
    width: 305,
    hieght: 300, 
    marginBottom: 20, 


  },

  ButtonText: { 
     fontsize:  20,

  },

  selImage: { 
    width: 300, 
    hieght: 300, 
    }
  
  }
  )


