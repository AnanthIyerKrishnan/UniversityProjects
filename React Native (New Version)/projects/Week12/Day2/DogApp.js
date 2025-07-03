// Importing React and necessary components from react-native
import React from 'react';
import { Text, View, Image } from 'react-native';

// Defining the main functional component called CatApp
export default function CatApp() {
  
  // Defining an object 'pic' that holds the URI (image URL) for the image we want to display
  let pic = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/dog2.png'
  };
  
  // Returning the JSX layout for rendering
  return (
    <View style={{
      flex: 1,                 // Makes the View take up the full screen
      justifyContent: 'center', // Centers the content vertically
      alignItems: 'center'      // Centers the content horizontally
    }}>
      
      {/* Image component for displaying the dog image */}
      <Image 
        source={pic}           // Setting the source of the image using the URI
        style={{ width: 200, height: 200 }} // Setting width and height of the image
      />
      
      {/* Text displayed below the image */}
      <Text>Hello, here is my dog!</Text>
    </View>
  );
}
