// ToDoPage.js
import React, { useState, useEffect } from 'react';
import {View,Text,TextInput,Button,StyleSheet,FlatList,Picker,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const priorityOptions = ['High', 'Medium', 'Low'];
const colorOptions = ['#FF0000', '#FFFF00', '#00FF00'];

function ToDo() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    completed: false,
    priority: priorityOptions[0], // Default to the first option
    color: colorOptions[0], // Default to the first option
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async () => {
    try {
      await axios.post(`${API_URL}/tasks`, newTask);
      fetchTasks(); // Reload tasks after adding a new one
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleEditTask = async (taskId) => {
    try {
      // Implement your logic to edit task
      console.log('Edit task with ID:', taskId);
      fetchTasks(); // Reload tasks after editing
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
      fetchTasks(); // Reload tasks after deleting
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={newTask.title}
          onChangeText={(text) => setNewTask({ ...newTask, title: text })}
        />
        <Picker
          style={styles.picker}
          selectedValue={newTask.priority}
          onValueChange={(itemValue, itemIndex) =>
            setNewTask({ ...newTask, priority: itemValue })
          }
        >
          {priorityOptions.map((priority, index) => (
            <Picker.Item key={index} label={priority} value={priority} />
          ))}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={newTask.color}
          onValueChange={(itemValue, itemIndex) =>
            setNewTask({ ...newTask, color: itemValue })
          }
        >
          {colorOptions.map((color, index) => (
            <Picker.Item key={index} label={color} value={color} />
          ))}
        </Picker>
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <Text>Priority: {item.priority}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditTask(item.id)}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTask(item.id)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
    width: '70%',
  },
  picker: {
    height: 40,
    width: '70%',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#DB4437',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default ToDo;
