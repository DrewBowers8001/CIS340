import React, {useState} from 'react ';
import { Button, Text, View } from 'react-native';

function TV(props) { 

  const [isOff,setIsOff] = useState(true); 
return(
  <View>
    <Text>
      This is {props.name} TV, snd it id {isOff ? "OFF" : "Turn ON"}
    </Text>
    <Button 
onPress = {() => {
  setIsOff(false); 
}}
disabled = {!isOff}
  title = {isOff ? "Turn Me On" : "Thank you"}  />
  </View>
);
}

export default function MultiTV(){
  return(
    
        <View >
  <TV name = "LG" />
  <TV name = "SAMSUNG" />

    </View>
  );
  }