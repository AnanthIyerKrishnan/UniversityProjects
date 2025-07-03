// Import React and React Native components
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

// Import Expo's ImagePicker and Sharing libraries
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {
  // Store the selected image URI in state (initially null)
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the image library
  async function openImagePicker() {
    // Ask the user for permission to access their media library
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // If permission is not granted, show an alert and stop
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "You need to allow access to select images.");
      return;
    }

    // Open the image picker so the user can choose a photo
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // Allows cropping
      quality: 1,          // Highest image quality
    });

    // If the user cancels, do nothing
    if (pickerResult.canceled) {
      return;
    }

    // Save the selected image URI to state
    let imageUri = pickerResult.assets[0].uri;
    setSelectedImage({ localUri: imageUri });
  }

  // Function to open the sharing dialog
  async function shareImage() {
    // If no image is selected, show an alert
    if (!selectedImage) {
      Alert.alert("No Image", "Please pick an image first.");
      return;
    }

    // Check if sharing is available on this device
    let canShare = await Sharing.isAvailableAsync();
    if (!canShare) {
      Alert.alert("Sharing not supported", "Sharing is not available on this device.");
      return;
    }

    // Open the sharing dialog with the selected image
    await Sharing.shareAsync(selectedImage.localUri);
  }

  // Main screen UI
  return (
    <View style={styles.container}>

      {/* If an image has been selected, show it and a share button */}
      {selectedImage ? (
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.selectedImage} />
          <TouchableOpacity onPress={shareImage} style={styles.button}>
            <Text style={styles.buttonText}>Share This Photo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // If no image is selected, show logo and pick button
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/logo.png' }}
            style={styles.logo}
          />
          <Text style={styles.instructions}>
            Press the button below to select an image from your phone!
          </Text>
          <TouchableOpacity onPress={openImagePicker} style={styles.button}>
            <Text style={styles.buttonText}>Pick Image</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

// Style definitions
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Take up the full screen
    alignItems: 'center',        // Center items horizontally
    justifyContent: 'center',    // Center items vertically
    backgroundColor: "#FFFFE0",  // Light yellow background
  },
  logo: {
    width: 310,
    height: 300,
    marginBottom: 20,
  },
  selectedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Keeps image ratio without stretching
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    color: "#87CEFA",           // Light blue text
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#778899", // Steel blue button
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",           // White text
  },
});
