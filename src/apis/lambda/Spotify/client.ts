import axios from "axios";

export const lambdaBaseURL = "https://0cvvajb1kj.execute-api.us-east-1.amazonaws.com"
const apiBaseURL = "http://localhost:8888/spotify/";

export const lambdaClient = axios.create({
    baseURL: lambdaBaseURL
});

lambdaClient.interceptors.request.use((config) => {
    return ({
        ...config,
        headers: {
            accept: "application/json"
        },
        withCredentials: true
    })
})

export const personalClient = axios.create({
    baseURL: apiBaseURL
})

personalClient.interceptors.request.use((config) => {
    return ({
        ...config,
        headers: {
            accept: "application/json"
        },
        withCredentials: true
    })
})
