// Import React and React Native components
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

// Create a constant array of state names to display in the list
const US_STATES = [
  { key: 'Alabama' },
  { key: 'Alaska' },
  { key: 'Arizona' },
  { key: 'Arkansas' },
  { key: 'California' },
  { key: 'Colorado' },
  { key: 'Delaware' },
  { key: 'Florida' },
  { key: 'Georgia' },
  { key: 'Hawaii' },
  { key: 'Idaho' },
  { key: 'Illinois' },
  { key: 'Indiana' },
  { key: 'Iowa' },
  { key: 'Kansas' },
  { key: 'Kentucky' },
  { key: 'Maine' },
  { key: 'Maryland' },
  { key: 'Massachusetts' },
  { key: 'Michigan' },
  { key: 'Minnesota' },
  { key: 'Mississippi' },
];

// Define the functional component
export default function StatesApp() {
  return (
    // Main container with padding at the top
    <View style={styles.container}>

      {/* FlatList is used to efficiently display a scrollable list of items */}
      <FlatList
        data={US_STATES} // Provide the data array
        keyExtractor={(item) => item.key} // Use the state name as the unique key

        // Render each item using a Text component
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.key}</Text>
        )}
      />

    </View>
  );
}

// Create styles using StyleSheet (cleaner than inline styles)
const styles = StyleSheet.create({
  container: {
    flex: 1,          // Use full screen height
    paddingTop: 22,   // Add space at the top
    backgroundColor: '#F0F8FF', // Optional: soft background color
  },
  itemText: {
    padding: 10,      // Space around each item
    fontSize: 20,     // Larger text
    height: 44,       // Fixed height for consistency
    color: '#333333', // Dark grey for good contrast
  }
});
