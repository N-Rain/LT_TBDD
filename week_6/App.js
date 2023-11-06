import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from'@react-navigation/native';

import Page_2 from './views/Page_2';
import Page_3 from './views/Page_3';
import Page_4 from './views/Page_4';
import Page_1 from './views/Page_1';

const Stack = createStackNavigator(
  
  );
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='App'>
      <Stack.Screen name = 'Page_1' component = {Page_1}/>
      <Stack.Screen name='Page_2' component={Page_2}/>
      <Stack.Screen name='Page_3' component={Page_3}/>
    </Stack.Navigator>
    </NavigationContainer>
    // <Page_1/>
    // <Page_2/>
    // <Page_3/>
    // <Page_4/>
  );
}



