import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current Conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°F
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 135 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    
    color: "#FFFFFF"
  },
  mainText: { flex: 3, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});

export default Forecast;
