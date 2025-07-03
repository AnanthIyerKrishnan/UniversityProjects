// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Main component of the Counter App
export default function CounterApp() {
  // State variable to keep track of the current count
  const [count, setCount] = useState(0);

  // Function to increase the count by 1
  function increaseCount() {
    setCount(previous => previous + 1);
  }

  // Function to decrease the count by 1
  function decreaseCount() {
    setCount(previous => previous - 1);
  }

  // Function to reset the count to 0
  function resetCount() {
    setCount(0);
  }

  return (
    <View style={styles.container}>

      {/* Display the current count */}
      <Text style={styles.text}>Count: {count}</Text>

      {/* Container to hold the buttons */}
      <View style={styles.buttonGroup}>

        {/* Increase button */}
        <View style={styles.buttonSpacing}>
          <Button title="Increase" onPress={increaseCount} />
        </View>

        {/* Decrease button */}
        <View style={styles.buttonSpacing}>
          <Button title="Decrease" onPress={decreaseCount} />
        </View>

        {/* Reset button */}
        <View style={styles.buttonSpacing}>
          <Button title="Reset" onPress={resetCount} />
        </View>
        
      </View>
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // Take up full screen
    justifyContent: 'center',     // Center vertically
    alignItems: 'center',         // Center horizontally
    backgroundColor: '#f0f0f0',   // Light gray background
    padding: 20,
  },
  text: {
    fontSize: 28,                 // Large text size
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonGroup: {
    width: '60%',                 // Take up 60% of screen width
  },
  buttonSpacing: {
    marginVertical: 10,          // Space between buttons
  },
});
