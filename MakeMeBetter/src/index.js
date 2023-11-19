import React from "react";
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from "./screens/Drawer";
import DetailArticle from './screens/DetailArticle';
import DetailFeed from './screens/DetailFeed';
import Notification from './screens/Notification';

const Stack = createStackNavigator();
function Application(){
    return(
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="Drawer"
                >
                    <Stack.Screen 
                        name="Drawer" 
                        component={Drawer}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen 
                        name="DetailArticle" 
                        component={DetailArticle}
                        options={{
                            headerShown: true
                        }}
                    />
                    <Stack.Screen 
                        name="DetailFeed" 
                        component={DetailFeed}
                        options={{
                            headerShown: true
                        }}
                    />
                    <Stack.Screen 
                        name="Notification" 
                        component={Notification}
                        options={{
                            headerShown: true
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>  
    )
}


  
export default Application;