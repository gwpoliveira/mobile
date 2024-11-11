// services/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config';

const api = axios.create({
    baseURL: config.apiUrl, // URL base do back-end, ex: 'https://meu-backend.com/api/'
});

// Interceptor para adicionar o token JWT nas requisições
api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
