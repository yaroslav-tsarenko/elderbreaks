import axios from "axios";
import {BACKEND_URL} from "@/constants/url";
const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('app_session='))
    ?.split('=')[1];
export const newRequest = axios.create({
    baseURL: `${BACKEND_URL}`,
    timeout: 5000,
    withCredentials: true,
    headers:{
        Authorization: `Bearer ${token}`,
    }
});