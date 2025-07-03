// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
  return (
    // Outer container View
    <View style={{
      flex: 1,                     // Makes the container take up the full screen
      flexDirection: 'column',    // Stacks child views vertically (top to bottom)
      justifyContent: 'space-evenly' // Evenly spaces children with equal space between, above, and below
    }}>
      
      {/* First box: red, 50x50 pixels */}
      <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'red'
      }} />

      {/* Second box: yellow, 50x50 pixels */}
      <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
      }} />

      {/* Third box: green, 50x50 pixels */}
      <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'green'
      }} />

    </View>
  );
}
