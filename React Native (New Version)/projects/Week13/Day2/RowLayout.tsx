// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
  return (
    // Outer container View with horizontal layout
    <View style={{
      flex: 1,                  // Fills the entire screen
      flexDirection: 'row'     // Arranges child Views horizontally (left to right)
    }}>

      {/* First box: red square, 50x50 pixels */}
      <View style={{
        width: 50, 
        height: 50, 
        backgroundColor: 'red'
      }} />

      {/* Second box: yellow square, 50x50 pixels */}
      <View style={{
        width: 50, 
        height: 50, 
        backgroundColor: 'yellow'
      }} />

      {/* Third box: green square, 50x50 pixels */}
      <View style={{
        width: 50, 
        height: 50, 
        backgroundColor: 'green'
      }} />

    </View>
  );
}
