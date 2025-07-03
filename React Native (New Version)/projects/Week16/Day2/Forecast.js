// Import React and necessary components from react-native
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Define the Forecast component
class Forecast extends Component {
  render() {
    return (
      // Container for all weather info
      <View style={styles.container}>
        
        {/* Display city and country */}
        <Text style={styles.bigText}>
          {this.props.city}, {this.props.country}
        </Text>

        {/* Weather icon based on the icon code from OpenWeatherMap */}
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${this.props.icon}.png` }}
          style={styles.weatherIcon}
        />

        {/* Main weather condition (e.g., Clear, Rain) */}
        <Text style={styles.bigText}>{this.props.main}</Text>

        {/* More detailed weather description */}
        <Text style={styles.mainText}>
          Current Conditions: {this.props.description}
        </Text>

        {/* Current temperature */}
        <Text style={styles.bigText}>{this.props.temp}°F</Text>

        {/* Feels-like temperature */}
        <Text style={styles.mainText}>
          Feels Like: {this.props.feels_like}°F
        </Text>

        {/* Minimum and maximum temperatures for the day */}
        <Text style={styles.mainText}>
          Min: {this.props.temp_min}°F | Max: {this.props.temp_max}°F
        </Text>

        {/* Humidity percentage */}
        <Text style={styles.mainText}>
          Humidity: {this.props.humidity}%
        </Text>

        {/* Wind speed and direction */}
        <Text style={styles.mainText}>
          Wind: {this.props.wind_speed} mph, {this.props.wind_deg}°
        </Text>

        {/* Atmospheric pressure in hPa */}
        <Text style={styles.mainText}>
          Pressure: {this.props.pressure} hPa
        </Text>

        {/* Visibility in meters */}
        <Text style={styles.mainText}>
          Visibility: {this.props.visibility} meters
        </Text>

        {/* Sunrise time (already formatted) */}
        <Text style={styles.mainText}>
          Sunrise: {this.props.sunrise}
        </Text>

        {/* Sunset time (already formatted) */}
        <Text style={styles.mainText}>
          Sunset: {this.props.sunset}
        </Text>
      </View>
    );
  }
}

// Styles for the Forecast component
const styles = StyleSheet.create({
  // Main container: vertically stacked content, aligned to the left
  container: {
    height: 300, // Fixed height for the forecast block
    alignItems: "flex-start", // Align text and icon to the left
    paddingLeft: 20 // Add space on the left
  },

  // Larger text style for titles and key values (e.g., city, temp)
  bigText: {
    fontSize: 20,
    textAlign: "left",
    color: "#FFFFFF" // White text for visibility on dark background
  },

  // Main body text style (for labels, details)
  mainText: {
    fontSize: 16,
    textAlign: "left",
    color: "#FFFFFF"
  },

  // Weather icon styling (fixed size)
  weatherIcon: {
    width: 50,
    height: 50
  }
});

// Export the Forecast component to be used in other files like WeatherForecast.js
export default Forecast;
