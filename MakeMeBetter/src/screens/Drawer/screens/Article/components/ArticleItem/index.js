import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ArticleItem(props) {

    const {
        item
    } = props || {};

    const navigation = useNavigation();
    const goToDetail = useCallback(() => {

        navigation.navigate("DetailArticle", item);
    }, [item]);
    
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Text>ArticleItem</Text>
        </TouchableOpacity>
    );
}

export default ArticleItem;