import React from 'react';
import { ScrollView } from 'react-native';
import Suggestion from './components/Suggestion';

function FeedSuggestion() {


    return (
        <ScrollView horizontal={true}>
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </ScrollView>
    );
}

export default FeedSuggestion;