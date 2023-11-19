import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import DataList from '../../components/DataList';
import ArticleItem from './components/ArticleItem';
import { getListArticles } from '../../../../services/article';
import useArticle from './hooks/useArticle';

function Article(props) {

    const {
        navigation,
        route
    } = props || {};
    
    const {
        params
    } = route || {};

    const {
    } = useArticle({

    });
    
    return (
        <DataList 
            service={getListArticles}
            keyName="id"
            params={params}
            component={ArticleItem}
        />
    );
}

export default Article;