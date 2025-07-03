import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  const { userName } = route.params;

  // Handle Logout
  const handleLogout = () => {
    Alert.alert('Success', 'Logged out successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'), // Navigate to Login screen after logout
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {userName}!</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
