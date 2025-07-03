// Import required modules
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Offer data (images + titles)
const offers = [
  {
    name: 'Croissant Deal',
    image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/croissant.png',
    discount: '20% off this week!'
  },
  {
    name: 'Bagel Bonanza',
    image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/bagel.png',
    discount: 'Buy 1 Get 1 Free'
  },
  {
    name: 'Muffin Madness',
    image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/muffin.png',
    discount: 'Flat 30% Off'
  },
  {
    name: 'Coffee Combo',
    image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/coffee.png',
    discount: 'Free Muffin with Large Coffee'
  },
  {
    name: 'Tea Time Treat',
    image: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/tea.png',
    discount: '15% Off on all teas'
  },
];

export default function BakeryOffer() {
  const [offerIndex, setOfferIndex] = useState(0);

  function generateOffer() {
    const randomIndex = Math.floor(Math.random() * offers.length);
    setOfferIndex(randomIndex);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Weekly Bakery Offer </Text>
      <Image source={{ uri: offers[offerIndex].image }} style={styles.image} />
      <Text style={styles.offerName}>{offers[offerIndex].name}</Text>
      <Text style={styles.discount}>{offers[offerIndex].discount}</Text>
      <View style={styles.buttonContainer}>
        <Button title="See Weekly Offer" onPress={generateOffer} />
      </View>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 15
  },
  offerName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5
  },
  discount: {
    fontSize: 16,
    color: '#E53935',
    marginBottom: 20
  },
  buttonContainer: {
    width: 160
  }
});
