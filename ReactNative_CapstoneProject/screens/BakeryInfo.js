// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Defining a functional component named BakeryOverviewScreen
export default function BakeryOverviewScreen() {
  // Defining an object 'logo' that holds the URI for the bakery logo image
  const logo = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/bakerylogo.png'
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bakery Logo */}
      <Image 
        source={logo}
        style={styles.logo}
      />

      {/* Bakery Name */}
      <Text style={styles.title}>Sweet Crumbs Bakery</Text>

      {/* Timings Section */}
      <Text style={styles.label}>Timings:</Text>
      <Text style={styles.text}>Mon–Sat: 7:00 AM – 8:00 PM</Text>
      <Text style={styles.text}>Sunday: Closed</Text>

      <View style={styles.separator} />

      {/* Location Section */}
      <Text style={styles.label}>Location:</Text>
      <Text style={styles.text}>123 Pastry Lane, Dessertville, CO 80523</Text>

      <View style={styles.separator} />

      {/* About Us Section */}
      <Text style={styles.label}>About Us:</Text>
      <Text style={styles.text}>
        Sweet Crumbs Bakery is your local destination for freshly baked croissants, 
        sourdough, and artisan pastries. We use organic ingredients and serve the best 
        coffee in town.
      </Text>

      <View style={styles.separator} />

      {/* Contact Section */}
      <Text style={styles.label}>Contact:</Text>
      <Text style={styles.text}>Phone: (123) 456-7890</Text>
      <Text style={styles.text}>Email: hello@sweetcrumbs.com</Text>
    </ScrollView>
  );
}

// Creating a StyleSheet object to define and reuse styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
  },
  separator: {
    height: 20,
  },
});
