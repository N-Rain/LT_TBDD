import React from 'react';
import { ScrollView } from 'react-native';
import Suggestion from './components/Suggestion';

function ArticleSuggestion(props) {


    return (
        <ScrollView horizontal={true}>
            <Suggestion label="Suggestion" value="sdfsdf"/>
        </ScrollView>
    );
}

export default ArticleSuggestion;