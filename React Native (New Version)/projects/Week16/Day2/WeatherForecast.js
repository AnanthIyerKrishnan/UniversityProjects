// Import React and necessary components from react-native
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

// Import custom Forecast component to display the weather
import Forecast from "./Forecast";

// Import helper module for fetching weather data from OpenWeatherMap API
import OpenWeatherMap from "./open_weather_map";

// Define the main component for the weather forecast
class WeatherForecast extends Component {

  // Constructor method to initialize state
  constructor(props) {
    super(props);
    // Initial state: zip code is empty, and no forecast yet
    this.state = { zip: "", forecast: null };
  }

  // Function to handle when user submits a zip code in the TextInput
  _hndleTextChange = event => {
    let zip = event.nativeEvent.text; // Extract the zip code from the event
    // Use helper method to fetch weather data for the entered zip
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      // Update the state with the fetched forecast data
      this.setState({ forecast: forecast });
    });
  };

  // Render method: what will be displayed on the screen
  render() {
    let content = null; // Will hold the Forecast component once data is available

    // If forecast data has been fetched, render the Forecast component
    if (this.state.forecast !== null) {
      content = (
        <Forecast 
          // Pass all relevant weather data as props to the Forecast component
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
          feels_like={this.state.forecast.feels_like}
          temp_min={this.state.forecast.temp_min}
          temp_max={this.state.forecast.temp_max}
          humidity={this.state.forecast.humidity}
          wind_speed={this.state.forecast.wind_speed}
          wind_deg={this.state.forecast.wind_deg}
          pressure={this.state.forecast.pressure}
          visibility={this.state.forecast.visibility}
          sunrise={this.state.forecast.sunrise}
          sunset={this.state.forecast.sunset}
          city={this.state.forecast.city}
          country={this.state.forecast.country}
          icon={this.state.forecast.icon}
        />
      );
    }

    // Main UI returned from the component
    return (
      <View style={styles.container}>
        {/* Background image */}
        <Image
          source={require('../../../assets/sky.jpg')} // Replace with correct path if needed
          resizeMode="cover" // Cover entire area
          style={styles.backdrop}
        />

        {/* Transparent overlay for content */}
        <View style={styles.overlay}>
          {/* Row for "Current Weather For" label and zip input */}
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current Weather For:{'\n'}
            </Text>

            {/* Container for zip code input */}
            <View style={styles.zipContainer}>
              <TextInput
                style={[styles.zipCode, styles.mainText]} // Apply input and text styles
                onSubmitEditing={this._hndleTextChange} // Trigger weather fetch
                underlineColorAndroid="transparent" // Remove underline on Android
              />
            </View>
          </View>

          {/* Forecast display goes here once data is available */}
          {content}
        </View>
      </View>
    );
  }
}

// Base font size used throughout the styles
const baseFontSize = 16;

// Style definitions for layout and appearance
const styles = StyleSheet.create({
  // Main container of the app
  container: { 
    flex: 1, // Fill the whole screen
    alignItems: "center", // Center horizontally
    paddingTop: 30, // Add space from top
    backgroundColor: "#000000", // Background color
  },

  // Background image style
  backdrop: { 
    width: 500,           // Set fixed width
    height: 200,          // Set fixed height
    resizeMode: "contain",// Maintain aspect ratio
    alignSelf: "center",  // Center image horizontally
    marginBottom: 10,     // Add spacing below image
  },

  // Semi-transparent overlay for readable content on top of image
  overlay: {
    paddingTop: 5, 
    opacity: 0.5, // Slightly see-through
    flexDirection: "column", // Stack children vertically
    alignItems: "center" // Center children horizontally
  },

  // Row layout for text and input field
  row: {
    flexDirection: "row", // Place elements in row
    flexWrap: "nowrap",   // No wrapping
    alignItems: "flex-start", // Align to top
    padding: 30, // Add padding around row
  },

  // Style for the zip code input container
  zipContainer: {
    height: baseFontSize + 10, // Slightly taller than font
    borderBottomColor: "#FFFAF0", // Light border color
    borderBottomWidth: 3, // Underline style
    marginLeft: 18, // Space between label and input
  },

  // Input style for zip code field
  zipCode: { 
    flex: 1,
    width: 100, // Fixed width for input
    height: baseFontSize // Set height to base font size
  },

  // Base text style used for both label and input
  mainText: { 
    fontSize: baseFontSize, 
    color: "#FFFAF0" // Light cream color
  }
});

// Export the component so it can be used in other files
export default WeatherForecast;
