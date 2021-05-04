
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';

export default class myApp extends Component {

 Constructor(props) { 
   super(props);
   this.state = {count: 0};
 }
 onTap = () => { 
   this.setState({
      count: this.state.count + 1 
   });
 }


  render(){
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
       onPress = {() => alert(' this button was pressed') } >
         <Text Style= {styles.buttonText}>Pick Image </Text> 
         <Text> Touch Me </Text>
     </TouchableOpacity>
    </View>
  );
}
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

  }
});
