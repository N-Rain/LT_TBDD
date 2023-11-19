import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent';
import Header from './components/Header';
import Article from './screens/Article';
import Feed from './screens/Feed';

const Drawer = createDrawerNavigator();

function DrawerScene() {

    const screenOptions = useMemo(() => {

        return {
            header: (props) => {

                return (
                    <Header {...props}/>
                );
            }
        };
    }, []);

    return (
        <Drawer.Navigator 
            initialRouteName='Article'
            drawerContent={DrawerContent}
            screenOptions={screenOptions}
        >
            <Drawer.Screen name="Article" component={Article} />
            <Drawer.Screen name="Feed" component={Feed} />
        </Drawer.Navigator>
    );
}

export default DrawerScene;