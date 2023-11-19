import axios from "axios";

export const getListArticles = (params) => {

    return axios({
        baseURL: "https://jsonplaceholder.typicode.com",
        url: "comments",
        method: "get",
        params
    });
};