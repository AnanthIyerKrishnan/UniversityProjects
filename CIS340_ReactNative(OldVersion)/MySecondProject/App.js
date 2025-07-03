import React from 'react';
import { Text, TextInput, View } from 'react-native';
import MyApp1 from './App copy';
import MyApp2 from './App copy 2';
import MyApp3 from './App copy 3';

function MyApp() {
  return (   
    <View> 
      <Text>
        Hello, I am a graduate student!
      </Text>
    </View>
         
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}> 
      <Text> Welcome to My Class </Text>
      <MyApp />
      <MyApp1 />
      <MyApp2/>
      
     </View> 
  )
}