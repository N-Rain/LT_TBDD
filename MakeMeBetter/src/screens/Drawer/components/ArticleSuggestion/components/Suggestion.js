import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Suggestion(props) {

    const {
        value,
        label
    } = props || {};
    const navigation = useNavigation();

    const onPress = useCallback(() => {

        navigation.setParams({
            suggestion: value
        });
    }, [value]);

    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
}

export default Suggestion;