// Import necessary components
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Image, StyleSheet, Alert } from 'react-native';

// Main functional component PlaceOrderScreen
export default function PlaceOrderScreen({ navigation }) { 

  // State variables for each item
  const [croissantCount, setCroissantCount] = useState(0);
  const [bagelCount, setBagelCount] = useState(0);
  const [muffinCount, setMuffinCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [teaCount, setTeaCount] = useState(0);

  // Increase functions
  function increaseCroissant() {
    setCroissantCount(prev => prev + 1);
  }
  function increaseBagel() {
    setBagelCount(prev => prev + 1);
  }
  function increaseMuffin() {
    setMuffinCount(prev => prev + 1);
  }
  function increaseCoffee() {
    setCoffeeCount(prev => prev + 1);
  }
  function increaseTea() {
    setTeaCount(prev => prev + 1);
  }

  // Decrease functions
  function decreaseCroissant() {
    if (croissantCount > 0) setCroissantCount(prev => prev - 1);
  }
  function decreaseBagel() {
    if (bagelCount > 0) setBagelCount(prev => prev - 1);
  }
  function decreaseMuffin() {
    if (muffinCount > 0) setMuffinCount(prev => prev - 1);
  }
  function decreaseCoffee() {
    if (coffeeCount > 0) setCoffeeCount(prev => prev - 1);
  }
  function decreaseTea() {
    if (teaCount > 0) setTeaCount(prev => prev - 1);
  }

  // Reset all counts
  function resetOrder() {
    setCroissantCount(0);
    setBagelCount(0);
    setMuffinCount(0);
    setCoffeeCount(0);
    setTeaCount(0);
  }

  // Place order
  function placeOrder() {
    const items = [];
  
    if (croissantCount > 0) items.push(`Croissant x ${croissantCount}`);
    if (bagelCount > 0) items.push(`Bagel x ${bagelCount}`);
    if (muffinCount > 0) items.push(`Muffin x ${muffinCount}`);
    if (coffeeCount > 0) items.push(`Coffee x ${coffeeCount}`);
    if (teaCount > 0) items.push(`Tea x ${teaCount}`);
  
    if (items.length === 0) {
      Alert.alert("No items selected", "Please add at least one item to your order.");
    } else {
      Alert.alert(
        "Order Placed!",
        `You ordered:\n\n${items.join('\n')}`,
        [
          {
            text: "OK",
            onPress: () => resetOrder()
          }
        ]
      );
    }
  }
  
  
  
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Place Your Order</Text>

      {/* Croissant */}
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Croissant</Text>
        <Image source={{ uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/croissant.png' }} style={styles.image} />
        <View style={styles.counterContainer}>
          <Button title="-" onPress={decreaseCroissant} />
          <Text style={styles.countText}>{croissantCount}</Text>
          <Button title="+" onPress={increaseCroissant} />
        </View>
      </View>

      {/* Bagel */}
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Bagel</Text>
        <Image source={{ uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/bagel.png' }} style={styles.image} />
        <View style={styles.counterContainer}>
          <Button title="-" onPress={decreaseBagel} />
          <Text style={styles.countText}>{bagelCount}</Text>
          <Button title="+" onPress={increaseBagel} />
        </View>
      </View>

      {/* Muffin */}
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Muffin</Text>
        <Image source={{ uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/muffin.png' }} style={styles.image} />
        <View style={styles.counterContainer}>
          <Button title="-" onPress={decreaseMuffin} />
          <Text style={styles.countText}>{muffinCount}</Text>
          <Button title="+" onPress={increaseMuffin} />
        </View>
      </View>

      {/* Coffee */}
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Coffee</Text>
        <Image source={{ uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/coffee.png' }} style={styles.image} />
        <View style={styles.counterContainer}>
          <Button title="-" onPress={decreaseCoffee} />
          <Text style={styles.countText}>{coffeeCount}</Text>
          <Button title="+" onPress={increaseCoffee} />
        </View>
      </View>

      {/* Tea */}
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Tea</Text>
        <Image source={{ uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/tea.png' }} style={styles.image} />
        <View style={styles.counterContainer}>
          <Button title="-" onPress={decreaseTea} />
          <Text style={styles.countText}>{teaCount}</Text>
          <Button title="+" onPress={increaseTea} />
        </View>
      </View>

      {/* Place/Reset Buttons */}
      <View style={styles.buttonGroup}>
        <Button title="Place Order" onPress={placeOrder} color="#4CAF50" />
        <View style={{ height: 10 }} />
        <Button title="Reset" onPress={resetOrder} color="#E53935" />
      </View>

    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 15
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  buttonGroup: {
    marginTop: 30,
    width: '60%'
  }
});
