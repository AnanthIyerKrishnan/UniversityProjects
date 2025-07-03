// Import necessary components from React and React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

// Main App component
export default function App() {
  // State variable to hold the text from the input field
  const [taskInput, setTaskInput] = useState('');

  // State variable to hold the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Function to add a new task to the list
  function addTask() {
    // Check if the input is not just empty spaces
    if (taskInput.trim()) {
      // Create a new array with the existing tasks and the new task
      const updatedList = [...taskList, taskInput];

      // Update the task list state
      setTaskList(updatedList);

      // Clear the input field after adding the task
      setTaskInput('');
    }
  }

  // Function to remove a task from the list by its index
  function deleteTask(indexToDelete) {
    // Create a copy of the current task list
    const updatedList = [...taskList];

    // Remove the task at the selected index
    updatedList.splice(indexToDelete, 1);

    // Update the task list state
    setTaskList(updatedList);
  }

  return (
    <View style={styles.container}>

      {/* Input field for entering a new task */}
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={taskInput}
        onChangeText={function (text) {
          setTaskInput(text);
        }}
      />

      {/* Button to add the task to the list */}
      <Button title="Add Task" onPress={addTask} />

      {/* Display the list of tasks using FlatList */}
      <FlatList
        data={taskList} // Data source for the list
        keyExtractor={function (item, index) {
          return index.toString(); // Unique key for each item (using index)
        }}
        renderItem={function ({ item, index }) {
          return (
            <View style={styles.taskContainer}>
              {/* Display the task text */}
              <Text style={styles.taskText}>{item}</Text>

              {/* Button to delete the task */}
              <Button
                title="Delete"
                onPress={function () {
                  deleteTask(index);
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,              // Take up full screen height
    padding: 20,          // Padding inside the screen
    backgroundColor: '#fff'
  },
  input: {
    borderBottomWidth: 1, // Line under the input
    borderColor: '#999',
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',         // Arrange text and button side-by-side
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
});
