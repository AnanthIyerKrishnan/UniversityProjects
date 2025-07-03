import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

// Functional Component
export default function BakeryFeedback() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');

  const submitFeedback = () => {
    if (!feedback || !rating) {
      Alert.alert('Missing Info', 'Please fill in both feedback and rating.');
      return;
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
      Alert.alert('Invalid Rating', 'Please enter a number between 1 and 5.');
      return;
    }

    Alert.alert('Thank You!', `Your feedback has been submitted.\nRating: ${rating}/5`);
    setFeedback('');
    setRating('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>We value your feedback!</Text>
      
      <Text style={styles.label}>Your Feedback:</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Tell us about your experience..."
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={setFeedback}
      />

      <Text style={styles.label}>Rating (1-5):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a rating"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={submitFeedback} color="#7B3F00" />
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff5e1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6B4226',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#6B4226',
  },
  textArea: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%',
    alignSelf: 'center',
  },
});
