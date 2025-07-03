// Import React and the required components from React Native
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Define a class-based component
export default class StudentMessage extends Component {
  // The render() method defines what is displayed on screen
  render() {
    return (
      // The View component is like a container (like a <div> in HTML)
      <View style={styles.container}>
        
        {/* Text elements to display messages on the screen */}
        <Text style={styles.text}>
          Hello, I am here, I am a student in CIS340!
        </Text>

        <Text style={styles.text}>
          I like using the class Component!
        </Text>

      </View>
    );
  }
}

// Define styles for the component using StyleSheet (cleaner than inline styles)
const styles = StyleSheet.create({
  container: {
    padding: 60,           // Adds space around the content
    backgroundColor: '#F5F5DC', // Optional: light background color for better visibility
  },
  text: {
    fontSize: 18,          // Makes the text a bit larger
    color: '#333333',      // Dark grey text for better readability
    marginBottom: 10       // Adds space between the text lines
  }
});
