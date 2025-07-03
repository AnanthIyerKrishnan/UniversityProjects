import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import MultiComp from './App copy';
import CatApp from './App copy 2';

function TV(props) {
 
  const [isOff, setIsOff] = useState(true);

  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"}!  
      </Text>
      <Button
         onPress={() => {
           setIsOff(false);
         }}
         disabled={!isOff}
         title={isOff ? "Turn Me On, Please!" : "Thank You!"} 
      />
   </View> 
 );
}

export default function MultiTVs(){
  return(
    <View> 
       <TV name="LG" />
       <TV name="Sony" />
    </View>
    
  );
  }