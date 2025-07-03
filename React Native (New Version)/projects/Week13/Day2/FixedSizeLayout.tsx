// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
  return (
    // Outer container View without any styling — it wraps the inner views
    <View>

      {/* First box: red square, 50x50 pixels */}
      <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />

      {/* Second box: yellow square, 100x100 pixels */}
      <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }} />

      {/* Third box: blue square, also 100x100 pixels */}
      <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />

    </View>
  );
}
