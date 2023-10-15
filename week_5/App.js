import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page_1 from './views/Page_1';
import Page_2 from './views/Page_2';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from'@react-navigation/native';
const Stack = createStackNavigator(
  // Page_1: Page_1,
  // Page_2: Page_2
  );

function App() {
  return (
    // <Page_1/>
    // <Page_2/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='App'>
      <Stack.Screen name = 'Page_1' component = {Page_1}/>
      <Stack.Screen name='Page_2' component={Page_2}/>
     
    </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
