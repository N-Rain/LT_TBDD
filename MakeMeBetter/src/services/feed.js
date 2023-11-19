import axios from "axios";

export const getListFeeds = (params) => {

    return axios({
        baseURL: "https://jsonplaceholder.typicode.com",
        url: "comments",
        method: "get",
        params
    });
};