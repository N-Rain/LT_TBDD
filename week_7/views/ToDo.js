// ToDo.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://localhost:3000';

function ToDo(){
    const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', completed: false, priority: 'high', color: '#FF0000' });

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
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <Text>Priority: {item.priority}</Text>
            <Button title="Edit" onPress={() => handleEditTask(item.id)} />
            <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

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
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default ToDo;
