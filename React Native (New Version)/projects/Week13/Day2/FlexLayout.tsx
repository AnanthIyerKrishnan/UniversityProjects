// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
  return (
    // Outer container View with flex styling
    <View style={{
      flex: 1,                    // Makes the container take up the full screen
      flexDirection: 'column',    // Arranges children vertically (default in React Native)
      justifyContent: 'center',   // Vertically centers the child views
      alignItems: 'stretch'       // Stretches children to fill the container's width
    }}>
      
      {/* First box: red square, height is fixed, but width will be overridden by 'stretch' */}
      <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />

      {/* Second box: yellow square */}
      <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />

      {/* Third box: green square */}
      <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />

    </View>
  );
}
