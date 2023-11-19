import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FeedItem(props) {

    const {
        item
    } = props || {};

    const navigation = useNavigation();
    const goToDetail = useCallback(() => {

        navigation.navigate("DetailFeed", item);
    }, [item]);
    
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Text>FeedItem</Text>
        </TouchableOpacity>
    );
}

export default FeedItem;