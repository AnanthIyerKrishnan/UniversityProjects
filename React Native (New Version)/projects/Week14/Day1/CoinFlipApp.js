// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Main App component
export default function App() {
  // State to store the current coin result (Heads or Tails)
  const [coinResult, setCoinResult] = useState('Heads');

  // State to store the countdown number (null means no countdown)
  const [countdown, setCountdown] = useState(null);

  // State to disable the button while flipping
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Coin image URLs from GitHub
  const images = {
    Heads: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/heads.jpg',
    Tails: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/tails.jpg',
  };

  // Function to start the countdown and flip the coin
  function flipCoinWithCountdown() {
    let counter = 3; // Starting countdown number

    // Set states to start the countdown and disable the button
    setCountdown(counter);
    setIsButtonDisabled(true);

    // Start a repeating interval every 500 milliseconds
    const countdownInterval = setInterval(() => {
      counter = counter - 1;
      setCountdown(counter); // Update countdown on screen

      if (counter === 0) {
        clearInterval(countdownInterval); // Stop countdown

        // Randomly decide Heads or Tails
        const result = Math.random() > 0.5 ? 'Heads' : 'Tails';

        // Update result state and reset countdown/button
        setCoinResult(result);
        setCountdown(null);
        setIsButtonDisabled(false);
      }
    }, 500); // 0.5 second intervals
  }

  return (
    <View style={styles.container}>

      {/* Show coin result when not counting down */}
      {countdown === null && (
        <Text style={[styles.resultText, { color: coinResult === 'Heads' ? '#007AFF' : '#FF9500' }]}>
          {coinResult}
        </Text>
      )}

      {/* Show countdown or coin image */}
      {countdown !== null ? (
        <Text style={styles.countdownText}>{countdown}</Text>
      ) : (
        <Image
          source={{ uri: images[coinResult] }}
          style={styles.coinImage}
        />
      )}

      {/* Flip button, disabled during countdown */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Flip Coin"
          onPress={flipCoinWithCountdown}
          disabled={isButtonDisabled}
        />
      </View>
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Fill full screen
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 10,
  },
  coinImage: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  buttonWrapper: {
    marginTop: 10,
    width: 150,
  },
});
