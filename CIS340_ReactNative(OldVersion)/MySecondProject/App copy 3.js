import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import {React} from 'react';

export default function MyApp3() {
  return (   
    <View> 
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
      </Text>
      <TextInput 
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1
      }}
      />
      </View>
         
  );
}

