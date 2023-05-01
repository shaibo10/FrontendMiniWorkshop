import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // replace with your server URL

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const postFormData = (formData: any) => {
    return axiosInstance.post('/teamFormData', formData);
}

export const getConclusions = () => {
    return axiosInstance.get('/teamChatGptConclusions');
}