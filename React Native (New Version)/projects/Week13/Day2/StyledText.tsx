// Importing React and core components from React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Main component of the app
export default function App() {
  return (
    // Outer container View using defined styles
    <View style={styles.container}>
      
      {/* A Text component with Blue color and small size */}
      <Text style={styles.blueText}>
        Just Blue Text!
      </Text>

      {/* A Text component with large green bold text */}
      <Text style={styles.largeGreenText}>
        This is Big Green
      </Text> 

      {/* A Text component that combines blueText and largeGreenText styles
          Order: Blue styles applied first, then overridden by largeGreen */}
      <Text style={[styles.blueText, styles.largeGreenText]}>
        Blue Text, then Big Green Text
      </Text>

      {/* A Text component that combines largeGreenText and blueText styles
          Order: largeGreen styles applied first, then overridden by Blue */}
      <Text style={[styles.largeGreenText, styles.blueText]}>
        Big Green Text, then Blue Text
      </Text>
    </View>
  );
}

// Creating a StyleSheet for reusable and clean styling
const styles = StyleSheet.create({

  // Main container with top margin and centered alignment
  container: {
    marginTop: 60,
    alignItems: 'center', // Center text horizontally
  },

  // Style for large green bold text
  largeGreenText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  // Style for smaller blue text
  blueText: {
    color: 'blue',
    fontSize: 20,
  },
});
