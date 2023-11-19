import React from 'react';
import { Text } from 'react-native';
import DataList from '../../components/DataList';
import FeedItem from './components/FeedItem';
import { getListFeeds } from '../../../../services/feed';
import useFeed from './hooks/useFeed';

function Feed(props) {

    const {
        navigation,
        route
    } = props || {};
    
    const {
        params
    } = route || {};

    const {
    } = useFeed({
        
    });
    return (
        <DataList 
            service={getListFeeds}
            keyName="id"
            params={params}
            component={FeedItem}
        />
    );
}

export default Feed;