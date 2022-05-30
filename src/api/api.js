import axios from "axios";

const api = axios.create({
    baseURL: "https://api.thedogapi.com/v1/",
});

api.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';
export default api;