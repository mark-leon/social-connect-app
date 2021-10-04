import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://leon-social-connect.herokuapp.com/api"

    })