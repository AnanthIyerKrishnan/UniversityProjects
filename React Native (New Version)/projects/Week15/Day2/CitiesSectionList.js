// Import React and necessary hooks from the React library
import React, { useState, useEffect } from "react";

// Import React Native components used in the app
import {
  Text,
  View,
  SectionList,
  ActivityIndicator,
  Alert,
} from "react-native";

// Main functional component
export default function StatesApp() {
  // 'sections' holds the grouped and formatted city data for SectionList
  const [sections, setSections] = useState([]);

  // 'loading' controls whether to show a loading spinner
  const [loading, setLoading] = useState(true);

  // GitHub URL that points to a raw text file containing a list of city names
  const githubUrl =
    "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/Cities.txt";

  // useEffect runs once when the component first loads (similar to componentDidMount)
  useEffect(() => {
    // Fetch the file content from the GitHub URL
    fetch(githubUrl)
      .then((response) => {
        // If the request failed, throw an error
        if (!response.ok) {
          throw new Error("Failed to fetch file");
        }
        // Return the text content of the response
        return response.text();
      })
      .then((text) => {
        // Split the text content by new lines to get each city name
        let cities = text
          .split("\n") // Creates an array of city strings
          .map((c) => c.trim()) // Removes extra spaces from each name
          .filter((c) => c !== "") // Removes any empty lines
          .sort(); // Sorts cities alphabetically

        // Group the cities by the first letter of each city name
        let groups = {};
        cities.forEach((city) => {
          let letter = city[0].toUpperCase(); // Get the first letter
          if (!groups[letter]) {
            groups[letter] = []; // Create a new group if it doesn't exist
          }
          groups[letter].push(city); // Add city to its letter group
        });

        // Convert the grouped object into an array format that SectionList uses
        let formatted = Object.keys(groups)
          .sort() // Sort the group headers alphabetically (A-Z)
          .map((letter) => ({
            title: letter, // The section title (A, B, C, etc.)
            data: groups[letter], // Array of cities under that letter
          }));

        // Save the final grouped data into state
        setSections(formatted);
      })
      .catch((error) => {
        // If anything goes wrong, log the error and show an alert
        console.error(error);
        Alert.alert("Error", "Could not fetch the file.");
      })
      .finally(() => {
        // Hide the loading spinner
        setLoading(false);
      });
  }, []); // Empty array means this runs only once when the app starts

  // If still loading data, show a spinner in the center of the screen
  if (loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  // Once loading is complete, return the SectionList with city data
  return (
    <View style={{ flex: 1, paddingTop: 22, paddingHorizontal: 10 }}>
      <SectionList
        // The city data grouped by letter
        sections={sections}

        // Unique key for each city item (using the index as a fallback)
        keyExtractor={(item, index) => index.toString()}

        // How each city name should be rendered
        renderItem={({ item }) => (
          <Text style={{ padding: 10, fontSize: 20 }}>{item}</Text>
        )}

        // How each section (group header) should be rendered
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              padding: 5,
              fontSize: 16,
              fontWeight: "bold",
              backgroundColor: "#9FA8DF",
              color: "white",
            }}
          >
            {section.title}
          </Text>
        )}
      />
    </View>
  );
}
