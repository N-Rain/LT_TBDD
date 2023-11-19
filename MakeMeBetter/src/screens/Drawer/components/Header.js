import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ArticleSuggestion from './ArticleSuggestion';
import FeedSuggestion from './FeedSuggestion';

function Header(props) {

    const {
        navigation,
        route
    } = props || {};

    const {
        name: routeName
    } = route || {};

    const toggleDrawer = useCallback(() => {

        navigation.toggleDrawer();
    }, []);

    return (
        <View>
            <Text>Header</Text>
            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={toggleDrawer}
            >
                <Text>Drawer</Text>
            </TouchableOpacity>
            {
                routeName == "Article" ? (
                    <ArticleSuggestion />
                ) : (
                    <FeedSuggestion />
                )
            }
        </View>
    );
}

export default Header;