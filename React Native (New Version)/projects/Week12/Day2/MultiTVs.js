// Importing React and the useState hook to manage state
import React, { useState } from 'react';

// Importing components from react-native
import { Text, View, Button } from 'react-native';

// This is a reusable component called TV that accepts a 'name' prop
function TV(props) {
  
  // useState hook creates a state variable 'isOff' with the initial value 'true'
  // 'setIsOff' is a function that will be used to change 'isOff'
  const [isOff, setIsOff] = useState(true);

  return (
    <View>
      {/* Adding vertical space using newline characters */}
      <Text>
        {"\n\n\n\n\n"}
        {/* Displaying the TV name and its current state using conditional rendering */}
        This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"}!
      </Text>

      {/* A Button that turns the TV on when pressed */}
      <Button
        onPress={() => {
          setIsOff(false); // Sets the TV state to "on"
        }}
        disabled={!isOff} // Disables the button if the TV is already on
        title={isOff ? "Turn Me On, Please!" : "Thank You!"} // Button text changes based on state
      />
    </View>
  );
}

// Main component that renders multiple TVs
export default function MultiTVs() {
  return (
    <View>
      {/* Rendering two TV components with different names */}
      <TV name="LG" />
      <TV name="Sony" />
    </View>
  );
}
