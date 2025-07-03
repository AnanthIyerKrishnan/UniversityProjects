import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import {React} from 'react';

export default function MyApp1() {
  const pet = "Dog";
  return (    
      <Text>
        {"\n\n\n"}
        I have a {pet}!
      </Text>
    
  );
}

