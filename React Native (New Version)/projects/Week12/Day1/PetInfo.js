// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Defining a functional component named MyApp
export default function MyApp() {
  // Creating a constant variable 'pet' and assigning it the value "Dog"
  const pet = "Dog";

  // Returning the UI layout of this component
  return (
    // View acts like a container for layout and grouping other components
    <View style={styles.container}>
      
      {/* Text component used to display the first message */}
      <Text style={styles.text}>
        Hello, I am a student in CIS340!
      </Text>

      {/* Text component that displays a dynamic message using the 'pet' variable */}
      <Text style={styles.text}>
        I have a {pet}!
      </Text>
    </View>
  );
}

// Creating a StyleSheet object to define and reuse styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the View take up the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',     // Centers content horizontally
    padding: 16, // Adds space around the content inside the container
  },
  text: {
    fontSize: 18, // Sets the font size of the text
    marginBottom: 10, // Adds space below each Text component
  },
});
