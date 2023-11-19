import { useCallback, useState, useMemo, useEffect } from 'react';

export default (options) => {

    const {
        service,
        keyName,
        params
    } = options || {};

    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const keyExtractor = useCallback((item) => {

        return item?.[keyName];
    }, []);

    const onRefresh = useCallback(async () => {

        setRefreshing(true);
        try {

            const request = service(params);
            const response = await request;
            const {
                status,
                data,
                statusText
            } = response || {};
            if(status != 200) {

                throw new Error(statusText);
            }

            setData(data);
        } catch(e) {

            setError(e);
        } finally {

            setRefreshing(false);
        }
    }, []);

    useEffect(() => {

        onRefresh();
        return () => {

        };
    }, [params]);

    return {
        keyExtractor,
        data,
        refreshing,
        loading,
        error,
        onRefresh
    };
};