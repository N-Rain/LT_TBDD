import React, { useCallback } from 'react';
import { Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import useDataList from './hooks/useDataList';

function DataList(props) {

    const {
        service,
        keyName,
        params,
        component: Component
    } = props || {};
    const {
        keyExtractor,
        data,
        refreshing,
        loading,
        error,
        onRefresh
    } = useDataList({
        service,
        keyName,
        params
    });

    const renderItem = useCallback((props) => {

        return (
            <Component {...props}/>
        );
    }, []);

    return (

        <FlatList 
            style={styles.container}
            data={data}
            refreshControl={
                <RefreshControl
                  refreshing = {refreshing}
                  onRefresh = {onRefresh}
                />
            }
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReachedThreshold={0.5}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    }
});

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

export default DataList;