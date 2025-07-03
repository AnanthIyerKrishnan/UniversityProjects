// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Updated Bakery menu items with images
const bakeryMenu = [
  { id: '1', name: 'Croissant', description: 'Buttery, flaky pastry perfect for breakfast.', image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/croissant.png' },
  { id: '2', name: 'Bagel', description: 'Chewy, golden-baked bagel with your choice of spread.', image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/bagel.png' },
  { id: '3', name: 'Muffin', description: 'Soft, sweet muffins available in blueberry and chocolate chip.', image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/muffin.png' },
  { id: '4', name: 'Coffee', description: 'Freshly brewed premium coffee, hot or iced.', image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/coffee.png' },
  { id: '5', name: 'Tea', description: 'Selection of herbal and black teas served hot.', image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/tea.png' }
];

// Defining a functional component named BakeryMenuScreen
export default function BakeryMenuScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sweet Crumbs Menu</Text>

      {bakeryMenu.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Creating a StyleSheet object to define and reuse styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fde2e4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center', // Center everything inside the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
