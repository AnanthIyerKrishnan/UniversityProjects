import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import {React} from 'react';

export default function MyApp2() {

  function getFullName(fname,mName,lName){
    return fname + " " + mName + " " + lName;
  }

  return (    
      <Text>
        {"\n\n\n"}
        My full name is {getFullName("Ananth","Iyer","Krishnan")} {"\n"}
      </Text>
         
  );
}

