// Importing necessary modules from React and React Native
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

// Functional component named WordConvertor
export default function WordConvertor() {
  // State hook to store the input text
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      
      {/* Input prompt for user clarity */}
      <Text style={styles.label}>Enter some text:</Text>

      {/* TextInput allows the user to type in text */}
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        onChangeText={(text) => setText(text)} // Updates state on input change
        value={text} // Keeps input controlled with state
      />

      {/* Display the converted text below the input */}
      <Text style={styles.output}>
        {
          // Split the text into words, replace each word with '*', then join them with spaces
          text
            .trim()
            .split(' ')
            .map((word) => word ? '*' : '') // Filter out empty strings
            .join('  ')
        }
      </Text>
    </View>
  );
}

// Styling using StyleSheet for clean, reusable styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  output: {
    fontSize: 42,
    paddingTop: 10,
  },
});
