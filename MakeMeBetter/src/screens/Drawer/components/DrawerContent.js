import React, { useCallback } from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import {Text} from 'react-native';
import DrawerItem from './DrawerItem';


function DrawerContent(props) {

    const {
        navigation
    } = props || {};
    console.log("DrawerContent", props);

    const goToArticle = useCallback(() => {

        navigation.navigate("Article");
    }, []);

    const goToFeed = useCallback(() => {

        navigation.navigate("Feed");
    }, []);

    const goToNotification = useCallback(() => {

        navigation.navigate("Notification");
    }, []);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="sdfsdfsfd"/>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;